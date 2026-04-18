import React, { useState, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '',
  placeholderSize = '10%',
  blur = true,
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [thumbnailSrc, setThumbnailSrc] = useState(null);

  // Gera uma thumbnail muito pequena para placeholder
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width * (parseInt(placeholderSize) / 100);
      canvas.height = img.height * (parseInt(placeholderSize) / 100);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setThumbnailSrc(canvas.toDataURL('image/jpeg', 0.1));
    };
  }, [src, placeholderSize]);

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imageRef);
      } else {
        // Fallback para browsers antigos
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <div
      ref={setImageRef}
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: '#f3f4f6' }}
    >
      {thumbnailSrc && (
        <div
          className="absolute inset-0 transform scale-110"
          style={{
            backgroundImage: `url(${thumbnailSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: blur ? 'blur(20px)' : 'none',
            transition: 'opacity 0.3s ease-out',
            opacity: isLoading ? 1 : 0,
          }}
        />
      )}
      
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
          decoding="async"
        />
      )}

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default LazyImage;
