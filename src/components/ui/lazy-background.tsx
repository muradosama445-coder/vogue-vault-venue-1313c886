import { useLazyImage } from '@/hooks/use-lazy-image';
import { Skeleton } from '@/components/ui/skeleton';
import { ReactNode } from 'react';

interface LazyBackgroundProps {
  src: string;
  children: ReactNode;
  className?: string;
  priority?: boolean;
}

export const LazyBackground = ({ src, children, className = '', priority = false }: LazyBackgroundProps) => {
  const { imageSrc, isLoading, imgRef } = useLazyImage(src);

  // For priority images (hero sections), load immediately with high priority
  if (priority) {
    return (
      <div className={`relative ${className}`}>
        <img 
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
          style={{ willChange: 'transform' }}
        />
        {children}
      </div>
    );
  }

  return (
    <div ref={imgRef as any} className={`relative ${className}`}>
      {isLoading || !imageSrc ? (
        <Skeleton className="absolute inset-0" />
      ) : (
        <img 
          src={imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          style={{ willChange: 'transform' }}
        />
      )}
      {children}
    </div>
  );
};
