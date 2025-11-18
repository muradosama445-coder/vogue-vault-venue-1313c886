import { useLazyImage } from '@/hooks/use-lazy-image';
import { Skeleton } from '@/components/ui/skeleton';
import { ReactNode } from 'react';

interface LazyBackgroundProps {
  src: string;
  children: ReactNode;
  className?: string;
}

export const LazyBackground = ({ src, children, className = '' }: LazyBackgroundProps) => {
  const { imageSrc, isLoading, imgRef } = useLazyImage(src);

  return (
    <div ref={imgRef as any} className={`relative ${className}`}>
      {isLoading || !imageSrc ? (
        <Skeleton className="absolute inset-0" />
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}
      {children}
    </div>
  );
};
