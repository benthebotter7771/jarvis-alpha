import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  hover = true,
  glass = false,
  padding = 'md',
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const glassClass = glass ? 'glass' : 'card';
  const hoverClass = hover ? 'hover:shadow-hard hover:-translate-y-1' : '';
  
  return (
    <div className={`
      ${glassClass}
      ${paddingClasses[padding]}
      ${hoverClass}
      transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}