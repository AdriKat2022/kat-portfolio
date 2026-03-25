import { cn } from '../../lib/utils';

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]',
        className
      )}
    >
      {children}
    </span>
  );
}
