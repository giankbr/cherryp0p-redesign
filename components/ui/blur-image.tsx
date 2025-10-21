"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface BlurImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  wrapperClassName?: string;
}

export function BlurImage({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loaded state when src changes
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", wrapperClassName)}>
      <Image
        src={src}
        alt={alt}
        className={cn(
          "transition-all duration-500",
          isLoaded ? "scale-100 blur-0" : "scale-105 blur-sm",
          className
        )}
        onLoadingComplete={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
