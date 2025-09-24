import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Track error in analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        page_location: window.location.href
      });
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback = ({ error, resetError }: { error?: Error; resetError: () => void }) => (
  <Card className="max-w-md mx-auto mt-8">
    <CardHeader className="text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="h-6 w-6 text-destructive" />
      </div>
      <CardTitle>Something went wrong</CardTitle>
      <CardDescription>
        {error?.message || "We're having trouble loading this section. Please try again."}
      </CardDescription>
    </CardHeader>
    <CardContent className="text-center space-y-4">
      <Button onClick={resetError} variant="outline" className="w-full">
        <RefreshCw className="mr-2 h-4 w-4" />
        Try Again
      </Button>
      <Button 
        onClick={() => window.location.reload()} 
        variant="ghost" 
        size="sm"
        className="w-full"
      >
        Refresh Page
      </Button>
    </CardContent>
  </Card>
);

// Specialized error boundaries for different sections
export const GalleryErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary fallback={GalleryErrorFallback}>
    {children}
  </ErrorBoundary>
);

const GalleryErrorFallback = ({ resetError }: { resetError: () => void }) => (
  <div className="text-center py-12 space-y-4">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
      <AlertTriangle className="h-8 w-8 text-muted-foreground" />
    </div>
    <div>
      <h3 className="text-lg font-semibold">Gallery temporarily unavailable</h3>
      <p className="text-muted-foreground">Please try refreshing or contact us directly.</p>
    </div>
    <Button onClick={resetError} variant="outline">
      <RefreshCw className="mr-2 h-4 w-4" />
      Reload Gallery
    </Button>
  </div>
);

export default ErrorBoundary;