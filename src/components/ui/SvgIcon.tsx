import { cn } from '@/lib/utils';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export function SvgIcon({ name, className, ...props }: SvgIconProps) {
  return (
    <svg 
      className={cn('inline-block h-5 w-5 fill-current', className)} 
      role="presentation" 
      aria-hidden="true" 
      {...props}
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
}
