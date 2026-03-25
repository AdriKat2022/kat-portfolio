import { useEffect, useRef } from 'react';

/**
 * Hook to trigger animations only when element is in viewport
 * Reduces GPU strain from constantly running animations
 * 
 * @param triggerClass - CSS class to add when in viewport
 * @param options - IntersectionObserver options
 * @returns ref to attach to element
 * 
 * @example
 * const ref = useInViewport('in-viewport');
 * return <div ref={ref} className="...elements with animations..." />;
 */
export function useInViewport(
  triggerClass: string = 'in-viewport',
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(triggerClass);
        } else {
          entry.target.classList.remove(triggerClass);
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [triggerClass, options]);

  return ref;
}
