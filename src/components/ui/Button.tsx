import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'border border-[var(--accent-border)] bg-[linear-gradient(120deg,var(--accent),var(--accent-2))] text-slate-950 shadow-[0_10px_28px_rgba(88,243,255,0.32)] hover:brightness-105',
      secondary: 'border border-[var(--border)] bg-[var(--social-bg)] text-[var(--text-h)] hover:border-[var(--accent-border)] hover:bg-[rgba(23,35,63,0.95)]',
      ghost: 'bg-transparent text-[var(--text)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]',
      outline: 'border border-[var(--border)] bg-[rgba(6,9,20,0.45)] text-[var(--text)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] hover:text-[var(--text-h)]',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-8 text-lg',
      icon: 'h-10 w-10',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
