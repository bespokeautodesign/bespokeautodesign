// Enhanced analytics tracking for Bespoke Auto Design

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters
    });
  }
};

// Service interest tracking
export const trackServiceInterest = (
  serviceType: 'ceramic_coating' | 'ppf' | 'vinyl_wrap' | 'window_tint' | 'marine',
  section: string,
  vehicleType?: 'luxury' | 'sports' | 'marine' | 'everyday'
) => {
  trackEvent({
    action: 'service_interest',
    category: 'engagement',
    label: serviceType,
    custom_parameters: {
      service_type: serviceType,
      page_section: section,
      vehicle_type: vehicleType,
      timestamp: new Date().toISOString()
    }
  });
};

// Quote funnel tracking
export const trackQuoteFunnel = (
  step: 'started' | 'vehicle_info' | 'service_selection' | 'contact_info' | 'submitted',
  estimatedValue?: number
) => {
  trackEvent({
    action: 'quote_funnel',
    category: 'conversion',
    label: step,
    value: estimatedValue,
    custom_parameters: {
      funnel_step: step,
      estimated_value: estimatedValue,
      session_id: getSessionId()
    }
  });
};

// Portfolio engagement tracking
export const trackPortfolioEngagement = (
  action: 'view' | 'zoom' | 'next' | 'previous',
  projectType: string,
  projectId?: string
) => {
  trackEvent({
    action: 'portfolio_engagement',
    category: 'engagement',
    label: action,
    custom_parameters: {
      project_type: projectType,
      project_id: projectId,
      interaction_type: action
    }
  });
};

// Phone call tracking
export const trackPhoneCall = (source: 'header' | 'contact_section' | 'cta_button') => {
  trackEvent({
    action: 'phone_call_click',
    category: 'conversion',
    label: source,
    custom_parameters: {
      call_source: source,
      phone_number: '(305) 555-0123' // Replace with actual number
    }
  });
};

// Form interaction tracking
export const trackFormInteraction = (
  formType: 'contact' | 'quote' | 'newsletter',
  interaction: 'focus' | 'blur' | 'submit' | 'error'
) => {
  trackEvent({
    action: 'form_interaction',
    category: 'engagement',
    label: `${formType}_${interaction}`,
    custom_parameters: {
      form_type: formType,
      interaction_type: interaction
    }
  });
};

// Scroll depth tracking
export const trackScrollDepth = (percentage: number, page: string) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
    custom_parameters: {
      page_path: page,
      scroll_percentage: percentage
    }
  });
};

// A/B test tracking
export const trackABTest = (testName: string, variant: string, action: 'view' | 'click') => {
  trackEvent({
    action: 'ab_test',
    category: 'experiment',
    label: `${testName}_${variant}_${action}`,
    custom_parameters: {
      test_name: testName,
      variant: variant,
      test_action: action
    }
  });
};

// Error tracking
export const trackError = (errorType: string, errorMessage: string, location: string) => {
  trackEvent({
    action: 'error',
    category: 'technical',
    label: errorType,
    custom_parameters: {
      error_message: errorMessage,
      error_location: location,
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString()
    }
  });
};

// Performance tracking
export const trackPerformance = (metric: string, value: number, category: string) => {
  trackEvent({
    action: 'performance_metric',
    category: 'technical',
    label: metric,
    value: Math.round(value),
    custom_parameters: {
      metric_name: metric,
      metric_value: value,
      metric_category: category
    }
  });
};

// Utility functions
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

// Initialize scroll depth tracking
export const initScrollTracking = (page: string) => {
  let maxScroll = 0;
  const milestones = [25, 50, 75, 90, 100];
  
  const trackScroll = () => {
    const scrolled = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrolled > maxScroll) {
      maxScroll = scrolled;
      
      milestones.forEach(milestone => {
        if (scrolled >= milestone && maxScroll >= milestone) {
          trackScrollDepth(milestone, page);
        }
      });
    }
  };
  
  window.addEventListener('scroll', trackScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', trackScroll);
};

// Initialize performance tracking
export const initPerformanceTracking = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const timing = performance.timing;
        const navigation = timing.loadEventEnd - timing.navigationStart;
        const domComplete = timing.domComplete - timing.navigationStart;
        const firstPaint = performance.getEntriesByType('paint')[0]?.startTime || 0;
        
        trackPerformance('page_load_time', navigation, 'navigation');
        trackPerformance('dom_complete_time', domComplete, 'navigation');
        trackPerformance('first_paint_time', firstPaint, 'rendering');
      }, 0);
    });
  }
};