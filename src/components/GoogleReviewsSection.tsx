import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useGoogleReviews, type GoogleReview } from "@/hooks/useGoogleReviews";
import { GOOGLE_WRITE_REVIEW_URL, GOOGLE_REVIEWS_URL, GOOGLE_PLACE_ID } from "@/config/places";

function ReviewCard({ review }: { review: GoogleReview }) {
  const text = review.text?.text ?? "";
  const truncated = text.length > 200 ? text.slice(0, 200) + "…" : text;
  const initials = review.authorAttribution.displayName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333] hover:border-amber-500/40 transition-colors h-full flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="h-10 w-10">
          {review.authorAttribution.photoUri && (
            <AvatarImage src={review.authorAttribution.photoUri} alt={review.authorAttribution.displayName} />
          )}
          <AvatarFallback className="bg-amber-500/20 text-amber-400 text-sm font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-white font-medium text-sm">{review.authorAttribution.displayName}</p>
          <p className="text-white/40 text-xs">{review.relativePublishTimeDescription}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      {truncated && <p className="text-white/70 text-sm leading-relaxed flex-1">{truncated}</p>}
    </div>
  );
}

function SeeAllCard({ reviewCount }: { reviewCount: number }) {
  return (
    <a
      href={`https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#1a1a1a] rounded-xl p-6 border-2 border-amber-500/50 hover:border-amber-500 transition-colors h-full flex flex-col items-center justify-center gap-4 text-center group"
    >
      <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center">
        <Star className="h-7 w-7 fill-amber-400 text-amber-400" />
      </div>
      <p className="text-white font-semibold text-lg">
        See all {reviewCount}+ Google reviews ↗
      </p>
      <p className="text-white/50 text-sm group-hover:text-amber-400 transition-colors">
        View on Google Maps
      </p>
    </a>
  );
}

function ReviewSkeleton() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
      <div className="flex items-center gap-3 mb-3">
        <Skeleton className="h-10 w-10 rounded-full bg-white/10" />
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-24 bg-white/10" />
          <Skeleton className="h-3 w-16 bg-white/10" />
        </div>
      </div>
      <Skeleton className="h-3 w-20 mb-3 bg-white/10" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full bg-white/10" />
        <Skeleton className="h-3 w-3/4 bg-white/10" />
      </div>
    </div>
  );
}

export function GoogleReviewsSection() {
  const { rating, reviewCount, reviews, loading } = useGoogleReviews();

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-amber-500/30 text-amber-400">
            Google Reviews
          </Badge>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Miami Clients Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real reviews from real XPEL clients — {rating.toFixed(1)}★ average across {reviewCount}+ Google reviews
          </p>
        </div>

        {/* Review Carousel */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[...Array(3)].map((_, i) => (
              <ReviewSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="mb-12">
            <Carousel
              opts={{ loop: true, align: "start" }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {reviews.map((review, i) => (
                  <CarouselItem key={i} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <ReviewCard review={review} />
                  </CarouselItem>
                ))}
                {/* "See all" card */}
                <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <SeeAllCard reviewCount={reviewCount} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex -left-12 border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-[#1a1a1a] hover:border-amber-500 bg-[#1a1a1a]" />
              <CarouselNext className="hidden lg:flex -right-12 border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-[#1a1a1a] hover:border-amber-500 bg-[#1a1a1a]" />
            </Carousel>
          </div>
        )}

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#333]">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-3xl font-bold text-white">{rating.toFixed(1)}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white/50 text-sm ml-1">based on {reviewCount} Google reviews</span>
          </a>
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-[#1a1a1a] font-bold px-8"
            asChild
          >
            <a href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
              Leave a Review on Google <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
