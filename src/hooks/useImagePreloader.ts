import { useEffect, useState } from 'react';

export const useImagePreloader = (imageUrls: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedImages = 0;

    const imagePromises = imageUrls.map(url => {
      return new Promise<void>(resolve => {
        const img = new Image();

        img.onload = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          resolve();
        };

        img.onerror = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          resolve(); // Resolve anyway to not block the loading
        };

        img.src = url;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [imageUrls]);

  return { imagesLoaded, loadedCount };
};

// Preload all site images
export const preloadAllImages = () => {
  const images = ['/hero.png', '/assets/portfolio-0.jpg', '/assets/portfolio-1.jpg', '/assets/portfolio-2.jpg', '/assets/portfolio-3.jpg', '/assets/portfolio-4.jpg', '/assets/portfolio-5.jpg', '/assets/cosplay-0.jpg', '/assets/cosplay-1.jpg', '/assets/cosplay-2.jpg', '/assets/cosplay-3.jpg', '/assets/cosplay-4.jpg', '/assets/cosplay-5.jpg', '/assets/about.jpg', '/assets/contact.jpg', '/assets/wip.jpg'];

  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};
