import React from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, style }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
    />
  );
};