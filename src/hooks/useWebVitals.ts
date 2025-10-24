import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export const useWebVitals = () => {
  useEffect(() => {
    if ('web-vital' in window) {
      return;
    }

    // Log Web Vitals for monitoring
    const logMetric = (metric: WebVitalsMetric) => {
      console.log(`[Web Vitals] ${metric.name}:`, metric.value, `(${metric.rating})`);
      
      // You can send to analytics here
      // Example: gtag('event', metric.name, { value: metric.value });
    };

    // Dynamically import web-vitals only in production
    if (import.meta.env.PROD) {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(logMetric);
        onINP(logMetric); // INP replaced FID in web-vitals v4
        onFCP(logMetric);
        onLCP(logMetric);
        onTTFB(logMetric);
      });
    }
  }, []);
};
