import type { VercelRequest, VercelResponse } from "@vercel/node";

const PLACE_ID = "ChIJP8iFysu72YgRXIwYjMCWrEQ";
const FIELD_MASK =
  "rating,userRatingCount,reviews.rating,reviews.text,reviews.authorAttribution,reviews.relativePublishTimeDescription,reviews.publishTime";

interface GoogleReview {
  rating: number;
  text?: { text: string };
  authorAttribution: { displayName: string; uri?: string; photoUri?: string };
  relativePublishTimeDescription: string;
  publishTime: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GOOGLE_PLACES_API_KEY env var is not configured" });
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": FIELD_MASK,
      },
    });

    if (!response.ok) {
      const body = await response.text();
      return res.status(502).json({ error: `Google Places API error: ${response.status}`, body });
    }

    const json = await response.json();
    const reviews = ((json.reviews ?? []) as GoogleReview[]).sort(
      (a, b) => new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime()
    );

    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    return res.status(200).json({
      rating: json.rating ?? null,
      reviewCount: json.userRatingCount ?? null,
      reviews,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
}