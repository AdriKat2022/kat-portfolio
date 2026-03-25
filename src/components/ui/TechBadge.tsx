import { cn } from '@/lib/utils';

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[rgba(88,243,255,0.1)] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]',
        className
      )}
    >
      {children}
    </span>
  );
}
