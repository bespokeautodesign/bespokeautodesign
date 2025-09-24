import { useCallback } from 'react';
import { trackFormInteraction, trackQuoteFunnel } from '@/utils/analytics';

export const useFormTracking = (formType: 'contact' | 'quote' | 'newsletter') => {
  const trackFocus = useCallback(() => {
    trackFormInteraction(formType, 'focus');
  }, [formType]);

  const trackBlur = useCallback(() => {
    trackFormInteraction(formType, 'blur');
  }, [formType]);

  const trackSubmit = useCallback(() => {
    trackFormInteraction(formType, 'submit');
    if (formType === 'quote') {
      trackQuoteFunnel('submitted');
    }
  }, [formType]);

  const trackError = useCallback(() => {
    trackFormInteraction(formType, 'error');
  }, [formType]);

  return {
    trackFocus,
    trackBlur,
    trackSubmit,
    trackError
  };
};