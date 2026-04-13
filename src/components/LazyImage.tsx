import React from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, style, width, height }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
    />
  );
};
