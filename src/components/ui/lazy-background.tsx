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

  // For priority images (hero sections), load immediately
  if (priority) {
    return (
      <div className={`relative ${className}`}>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${src})`,
            willChange: 'transform'
          }}
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
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imageSrc})`,
            willChange: 'transform'
          }}
        />
      )}
      {children}
    </div>
  );
};
