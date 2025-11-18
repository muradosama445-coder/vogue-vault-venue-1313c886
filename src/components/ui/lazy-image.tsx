import { useLazyImage } from '@/hooks/use-lazy-image';
import { Skeleton } from '@/components/ui/skeleton';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
}

export const LazyImage = ({ src, alt, className = '', wrapperClassName = '', priority = false }: LazyImageProps) => {
  const { imageSrc, isLoading, imgRef } = useLazyImage(src);

  // For priority images, load immediately without lazy loading
  if (priority) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        loading="eager"
        fetchPriority="high"
      />
    );
  }

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
          decoding="async"
        />
      )}
    </div>
  );
};
