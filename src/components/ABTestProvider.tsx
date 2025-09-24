import React, { createContext, useContext, useEffect, useState } from 'react';
import { trackABTest } from '@/utils/analytics';

interface ABTest {
  name: string;
  variants: string[];
  weights?: number[];
}

interface ABTestContextType {
  getVariant: (testName: string) => string;
  trackTestView: (testName: string) => void;
  trackTestClick: (testName: string) => void;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

// Define your A/B tests here
const AB_TESTS: ABTest[] = [
  {
    name: 'hero_cta',
    variants: ['get_quote', 'free_estimate', 'schedule_consultation'],
    weights: [0.33, 0.33, 0.34]
  },
  {
    name: 'service_pricing',
    variants: ['show_pricing', 'hide_pricing'],
    weights: [0.5, 0.5]
  },
  {
    name: 'portfolio_layout',
    variants: ['grid', 'carousel'],
    weights: [0.6, 0.4]
  },
  {
    name: 'contact_form_length',
    variants: ['short', 'detailed'],
    weights: [0.5, 0.5]
  },
  {
    name: 'testimonial_placement',
    variants: ['top', 'middle', 'bottom'],
    weights: [0.33, 0.33, 0.34]
  }
];

export const ABTestProvider = ({ children }: { children: React.ReactNode }) => {
  const [variants, setVariants] = useState<Record<string, string>>({});

  useEffect(() => {
    // Initialize variants for each test
    const initialVariants: Record<string, string> = {};
    
    AB_TESTS.forEach(test => {
      // Check if we already have a variant stored for this session/user
      const storedVariant = localStorage.getItem(`ab_test_${test.name}`);
      
      if (storedVariant && test.variants.includes(storedVariant)) {
        initialVariants[test.name] = storedVariant;
      } else {
        // Assign new variant based on weights
        const variant = selectVariant(test.variants, test.weights);
        initialVariants[test.name] = variant;
        localStorage.setItem(`ab_test_${test.name}`, variant);
      }
    });
    
    setVariants(initialVariants);
  }, []);

  const selectVariant = (variants: string[], weights?: number[]): string => {
    if (!weights || weights.length !== variants.length) {
      // Equal distribution if no weights provided
      return variants[Math.floor(Math.random() * variants.length)];
    }
    
    const random = Math.random();
    let cumulativeWeight = 0;
    
    for (let i = 0; i < variants.length; i++) {
      cumulativeWeight += weights[i];
      if (random <= cumulativeWeight) {
        return variants[i];
      }
    }
    
    return variants[variants.length - 1];
  };

  const getVariant = (testName: string): string => {
    return variants[testName] || AB_TESTS.find(t => t.name === testName)?.variants[0] || '';
  };

  const trackTestView = (testName: string) => {
    const variant = getVariant(testName);
    if (variant) {
      trackABTest(testName, variant, 'view');
    }
  };

  const trackTestClick = (testName: string) => {
    const variant = getVariant(testName);
    if (variant) {
      trackABTest(testName, variant, 'click');
    }
  };

  return (
    <ABTestContext.Provider value={{ getVariant, trackTestView, trackTestClick }}>
      {children}
    </ABTestContext.Provider>
  );
};

export const useABTest = () => {
  const context = useContext(ABTestContext);
  if (context === undefined) {
    throw new Error('useABTest must be used within an ABTestProvider');
  }
  return context;
};

// Helper hook for specific tests
export const useHeroCTA = () => {
  const { getVariant, trackTestView, trackTestClick } = useABTest();
  
  useEffect(() => {
    trackTestView('hero_cta');
  }, [trackTestView]);
  
  const variant = getVariant('hero_cta');
  
  const getButtonText = () => {
    switch (variant) {
      case 'get_quote':
        return 'Get Quote';
      case 'free_estimate':
        return 'Free Estimate';
      case 'schedule_consultation':
        return 'Schedule Consultation';
      default:
        return 'Get Quote';
    }
  };
  
  const handleClick = () => {
    trackTestClick('hero_cta');
  };
  
  return { buttonText: getButtonText(), handleClick, variant };
};