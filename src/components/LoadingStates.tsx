import { Loader2, Car, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export const LoadingSpinner = ({ size = 'md', className, text }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <div className={cn("flex items-center justify-center space-x-2", className)}>
      <Loader2 className={cn("animate-spin", sizeClasses[size])} />
      {text && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  );
};

export const CarLoadingAnimation = ({ text = "Processing your request..." }: { text?: string }) => (
  <div className="flex flex-col items-center justify-center space-y-4 py-8">
    <div className="relative">
      <Car className="h-12 w-12 text-primary animate-bounce" />
      <Sparkles className="h-6 w-6 text-xpel-yellow absolute -top-2 -right-2 animate-pulse" />
    </div>
    <div className="text-center space-y-2">
      <p className="font-medium">{text}</p>
      <div className="flex space-x-1 justify-center">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  </div>
);

export const FormSubmissionLoading = ({ 
  isLoading, 
  submitText = "Submit", 
  loadingText = "Sending..." 
}: { 
  isLoading: boolean; 
  submitText?: string; 
  loadingText?: string; 
}) => (
  <>
    {isLoading ? (
      <div className="flex items-center justify-center">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {loadingText}
      </div>
    ) : (
      submitText
    )}
  </>
);

export const PageTransitionLoading = () => (
  <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
    <CarLoadingAnimation text="Loading..." />
  </div>
);

export const ImageLoadingPlaceholder = ({ 
  className,
  alt 
}: { 
  className?: string; 
  alt?: string; 
}) => (
  <div className={cn(
    "bg-muted animate-pulse flex items-center justify-center rounded-lg",
    className
  )}>
    <Car className="h-8 w-8 text-muted-foreground" />
    <span className="sr-only">{alt || "Loading image"}</span>
  </div>
);