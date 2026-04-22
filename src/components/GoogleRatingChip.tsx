import { Star } from "lucide-react";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";
import { GOOGLE_REVIEWS_URL } from "@/config/places";
import { Skeleton } from "@/components/ui/skeleton";

export function GoogleRatingChip() {
  const { rating, reviewCount, loading } = useGoogleReviews();

  if (loading) {
    return <Skeleton className="h-5 w-32 rounded-full bg-white/10" />;
  }

  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
    >
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-xpel-yellow text-xpel-yellow" />
      ))}
      <span className="font-semibold ml-0.5">{rating.toFixed(1)}</span>
      <span className="text-white/50">({reviewCount} reviews)</span>
    </a>
  );
}
