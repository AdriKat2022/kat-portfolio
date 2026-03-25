import { cn } from '@/lib/utils';

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'tech-badge',
        className
      )}
    >
      {children}
    </span>
  );
}
