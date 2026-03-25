/**
 * Skeleton Loading Component
 * Placeholder while images are loading
 */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-[rgba(88,243,255,0.1)] via-[rgba(88,243,255,0.2)] to-[rgba(88,243,255,0.1)] ${className || 'h-full w-full'}`}
    />
  );
}
