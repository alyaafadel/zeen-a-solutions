
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnhancedIconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'interactive' | 'gradient';
  className?: string;
  ariaLabel?: string;
  title?: string;
  animate?: boolean;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12'
};

const variantClasses = {
  default: '',
  interactive: 'transition-all duration-300 hover:scale-110 hover:text-brand-blue cursor-pointer',
  gradient: 'transition-all duration-300 hover:scale-110'
};

const EnhancedIcon: React.FC<EnhancedIconProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'default',
  className = '',
  ariaLabel,
  title,
  animate = false
}) => {
  const animationClass = animate ? 'animate-pulse hover:animate-none' : '';

  return (
    <div title={title} className="inline-flex">
      <Icon
        className={cn(
          sizeClasses[size],
          variantClasses[variant],
          animationClass,
          className
        )}
        aria-label={ariaLabel}
        role={ariaLabel ? 'img' : undefined}
      />
    </div>
  );
};

export default EnhancedIcon;
