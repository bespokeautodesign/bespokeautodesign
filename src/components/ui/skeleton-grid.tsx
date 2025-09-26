import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface SkeletonGridProps {
  count?: number;
  className?: string;
}

export const ServiceSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("space-y-4", className)}>
    <Skeleton className="h-48 w-full rounded-lg" />
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);

export const TestimonialSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("space-y-4 p-6", className)}>
    <div className="flex items-center space-x-2">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
    <Skeleton className="h-16 w-full" />
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-4 rounded-full" />
      ))}
    </div>
  </div>
);

export const SkeletonGrid = ({ count = 4, className }: SkeletonGridProps) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
    {Array.from({ length: count }).map((_, index) => (
      <ServiceSkeleton key={index} />
    ))}
  </div>
);