import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { Skeleton } from '@components/ui/Skeleton';
import { useLazyImage } from '@/hooks/useLazyImage';
import { cn } from '@/lib/utils';

export interface CarouselImageItem {
  src: string;
  alt: string;
  key?: string;
}

interface ImageCarouselProps {
  images: CarouselImageItem[];
  className?: string;
  viewportClassName?: string;
}

export function ImageCarousel({ images, className, viewportClassName }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const hasControls = images.length > 1;

  const slides = useMemo(
    () =>
      images.map((image, idx) => ({
        ...image,
        key: image.key ?? `${image.src}-${idx}`,
      })),
    [images]
  );

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
    const nextChild = container.children.item(nextIndex) as HTMLElement | null;
    if (!nextChild) return;

    nextChild.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    setActiveIndex(0);
    scrollToIndex(0);
    // Only reset when the image set changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || slides.length <= 1) return;

    const updateActiveIndex = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      Array.from(container.children).forEach((child, idx) => {
        const element = child as HTMLElement;
        const childCenter = element.offsetLeft + element.clientWidth / 2;
        const distance = Math.abs(childCenter - containerCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = idx;
        }
      });

      setActiveIndex(nearestIndex);
    };

    container.addEventListener('scroll', updateActiveIndex, { passive: true });
    return () => container.removeEventListener('scroll', updateActiveIndex);
  }, [slides.length]);

  return (
    <section className={cn('relative', className)} aria-label="Project screenshots">
      {hasControls && (
        <>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 border border-[var(--border)] bg-[rgba(7,11,22,0.76)]"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 border border-[var(--border)] bg-[rgba(7,11,22,0.76)]"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === slides.length - 1}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      <div
        ref={scrollRef}
        className={cn(
          'flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide pb-4',
          viewportClassName
        )}
      >
        {slides.map((image) => (
          <div key={image.key} className="w-full shrink-0 snap-start">
            <CarouselImage src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {hasControls && (
        <div className="mt-2 flex items-center justify-center gap-2" role="tablist" aria-label="Carousel pagination">
          {slides.map((image, idx) => (
            <button
              key={`dot-${image.key}`}
              type="button"
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-all',
                idx === activeIndex ? 'bg-[var(--accent)] scale-110' : 'bg-[rgba(137,163,224,0.45)] hover:bg-[rgba(137,163,224,0.7)]'
              )}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to image ${idx + 1}`}
              aria-selected={idx === activeIndex}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function CarouselImage({ src, alt }: { src: string; alt: string }) {
  const { imageSrc, isLoading, ref } = useLazyImage(src);

  return (
    <div
      ref={ref}
      className="relative h-64 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--social-bg)] sm:h-96"
    >
      {isLoading && <Skeleton className="absolute inset-0" />}
      <img
        src={imageSrc}
        alt={alt}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  );
}