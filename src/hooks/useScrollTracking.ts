import { useEffect } from 'react';
import { initScrollTracking } from '@/utils/analytics';

export const useScrollTracking = (pageName: string) => {
  useEffect(() => {
    const cleanup = initScrollTracking(pageName);
    return cleanup;
  }, [pageName]);
};