import { useState, useEffect } from "react";
import { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } from "@/config/places";

const CACHE_KEY = "bespoke-reviews-v1";
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

interface ReviewAuthor {
  displayName: string;
  uri?: string;
  photoUri?: string;
}

export interface GoogleReview {
  rating: number;
  text?: { text: string };
  authorAttribution: ReviewAuthor;
  relativePublishTimeDescription: string;
  publishTime: string;
}

interface CachedData {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
  timestamp: number;
}

interface UseGoogleReviewsReturn {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
  loading: boolean;
  error: string | null;
}

const DEFAULTS: Omit<UseGoogleReviewsReturn, "loading" | "error"> = {
  rating: 5.0,
  reviewCount: 44,
  reviews: [],
};

export function useGoogleReviews(): UseGoogleReviewsReturn {
  const [data, setData] = useState<Omit<UseGoogleReviewsReturn, "loading" | "error">>(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check cache first
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed: CachedData = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL) {
          setData({ rating: parsed.rating, reviewCount: parsed.reviewCount, reviews: parsed.reviews });
          setLoading(false);
          return;
        }
      }
    } catch {
      // ignore cache errors
    }

    const fieldMask = "rating,userRatingCount,reviews.rating,reviews.text,reviews.authorAttribution,reviews.relativePublishTimeDescription,reviews.publishTime";

    fetch(`https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": GOOGLE_PLACES_API_KEY,
        "X-Goog-FieldMask": fieldMask,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        const sortedReviews = ((json.reviews ?? []) as GoogleReview[]).sort(
          (a, b) => new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime()
        );
        const result = {
          rating: json.rating ?? DEFAULTS.rating,
          reviewCount: json.userRatingCount ?? DEFAULTS.reviewCount,
          reviews: sortedReviews,
        };
        setData(result);

        // Cache
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ...result, timestamp: Date.now() }));
        } catch { /* quota */ }
      })
      .catch((err) => {
        setError(err.message);
        // Keep defaults — never show broken UI
      })
      .finally(() => setLoading(false));
  }, []);

  return { ...data, loading, error };
}
