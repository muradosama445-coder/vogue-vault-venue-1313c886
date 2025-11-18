import { useLazyImage } from '@/hooks/use-lazy-image';
import { Skeleton } from '@/components/ui/skeleton';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export const LazyImage = ({ src, alt, className = '', wrapperClassName = '' }: LazyImageProps) => {
  const { imageSrc, isLoading, imgRef } = useLazyImage(src);

  return (
    <div ref={imgRef as any} className={wrapperClassName}>
      {isLoading || !imageSrc ? (
        <Skeleton className={`w-full h-full ${className}`} />
      ) : (
        <img 
          src={imageSrc} 
          alt={alt} 
          className={className}
          loading="lazy"
        />
      )}
    </div>
  );
};
