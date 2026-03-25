import { useState, useEffect, useRef } from 'react';

interface UseLazyImageReturn {
  imageSrc: string;
  isLoading: boolean;
  ref: React.RefObject<HTMLDivElement>;
}

/**
 * Hook for lazy loading images with IntersectionObserver
 * Reduces initial load time by deferring off-screen images
 * 
 * @param src - Image source URL
 * @param placeholder - Optional placeholder image/data URI
 * @returns Object with imageSrc, isLoading state, and ref to attach to container
 * 
 * @example
 * const { imageSrc, isLoading, ref } = useLazyImage('/path/to/image.jpg');
 * return (
 *   <div ref={ref}>
 *     {isLoading && <Skeleton />}
 *     <img src={imageSrc} alt="..." />
 *   </div>
 * );
 */
export function useLazyImage(
  src: string,
  placeholder?: string
): UseLazyImageReturn {
  const fallbackPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="1"%3E%3C/svg%3E';
  const initialPlaceholder = placeholder ?? fallbackPlaceholder;
  const [imageSrc, setImageSrc] = useState(initialPlaceholder);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStartedLoadingRef = useRef(false);

  useEffect(() => {
    hasStartedLoadingRef.current = false;
    setImageSrc(initialPlaceholder);
    setIsLoading(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedLoadingRef.current) {
            hasStartedLoadingRef.current = true;
            const img = new Image();
            
            img.onload = () => {
              setImageSrc(src);
              setIsLoading(false);
              observer.unobserve(entry.target);
            };

            img.onerror = () => {
              // Fallback to original src even if load fails
              setImageSrc(src);
              setIsLoading(false);
              observer.unobserve(entry.target);
            };

            img.src = src;
          }
        });
      },
      { rootMargin: '50px' } // Start loading 50px before entering viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, [src, initialPlaceholder]);

  return { imageSrc, isLoading, ref: containerRef as React.RefObject<HTMLDivElement> };
}
