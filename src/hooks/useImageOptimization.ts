import { useEffect, useState } from 'react';

interface ImageOptimizationOptions {
  src: string;
  lowQualitySrc?: string;
  threshold?: number;
}

export const useImageOptimization = ({ src, lowQualitySrc, threshold = 0.1 }: ImageOptimizationOptions) => {
  const [imageSrc, setImageSrc] = useState(lowQualitySrc || src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Use Intersection Observer for lazy loading
    const img = new Image();
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = src;
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    // Create a dummy element to observe
    const dummyElement = document.createElement('div');
    observer.observe(dummyElement);

    return () => {
      observer.disconnect();
    };
  }, [src, threshold]);

  return { imageSrc, isLoaded };
};

// Hook for preloading critical images
export const usePreloadImage = (src: string) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [src]);
};
