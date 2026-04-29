import { useState, useEffect } from "react";

const CACHE_KEY = "bespoke-reviews-v2";
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
  reviewCount: 45,
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
          const sortedCached = [...parsed.reviews].sort(
            (a, b) => new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime()
          );
          setData({ rating: parsed.rating, reviewCount: parsed.reviewCount, reviews: sortedCached });
          setLoading(false);
          return;
        }
      }
    } catch {
      // ignore cache errors
    }

    fetch(`/api/google-reviews`)
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
          reviewCount: json.reviewCount ?? DEFAULTS.reviewCount,
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
