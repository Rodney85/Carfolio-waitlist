import React from 'react';
import { Squirrel } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  linkTo?: string;
  className?: string;
  iconSize?: number;
  textSize?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  linkTo = '/',
  className = '',
  iconSize = 4,
  textSize = 'md',
  showText = true,
}) => {
  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const LogoContent = (
    <div className={`flex items-center gap-2 group ${className}`}>
      {showText && (
        <span className={`font-bold ${textSizeClasses[textSize]}`}>
          <span className="text-white">Car</span>
          <span className="text-white">Folio</span>
        </span>
      )}
      <Squirrel className={`w-${iconSize} h-${iconSize} text-white group-hover:text-rose-300 transition-colors duration-300 transform scale-x-[-1]`} />
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{LogoContent}</Link>;
  }

  return LogoContent;
};

export default Logo;