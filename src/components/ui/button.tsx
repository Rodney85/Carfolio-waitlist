import * as React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          
          // Variants
          variant === 'default' && "bg-white text-black hover:bg-white/90",
          variant === 'outline' && "border border-white/20 bg-transparent text-white hover:bg-white/10",
          variant === 'ghost' && "hover:bg-white/10 text-white",
          
          // Sizes
          size === 'default' && "h-10 px-4 py-2",
          size === 'sm' && "h-9 px-3 text-xs",
          size === 'lg' && "h-11 px-8",
          
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
