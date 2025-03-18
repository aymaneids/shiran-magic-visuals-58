
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type Image = {
  src: string;
  alt: string;
  title?: string;
  category?: string;
};

interface ImageGalleryProps {
  images: Image[];
  className?: string;
  columns?: number;
  masonry?: boolean;
}

const ImageGallery = ({ 
  images, 
  className, 
  columns = 3,
  masonry = false
}: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const gridClassName = cn(
    "grid gap-4",
    {
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": columns === 3,
      "grid-cols-1 md:grid-cols-2": columns === 2,
      "grid-cols-1": columns === 1,
    },
    className
  );

  return (
    <>
      <div className={gridClassName}>
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "image-container overflow-hidden rounded-md cursor-pointer",
              masonry && "break-inside-avoid"
            )}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-700"
              loading="lazy"
            />
            <div className="image-overlay flex flex-col justify-end p-4">
              {image.title && (
                <h3 className="text-white font-medium text-lg">{image.title}</h3>
              )}
              {image.category && (
                <p className="text-white/80 text-sm">{image.category}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button
            className="absolute left-4 md:left-8 text-white hover:text-gray-300 z-10"
            onClick={goToPrevImage}
          >
            <ArrowLeft size={32} />
          </button>
          
          <button
            className="absolute right-4 md:right-8 text-white hover:text-gray-300 z-10"
            onClick={goToNextImage}
          >
            <ArrowRight size={32} />
          </button>
          
          <div className="w-full max-w-5xl p-4 relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-auto max-h-[85vh] object-contain animate-fade-in-slow"
            />
            
            {(images[currentImageIndex].title || images[currentImageIndex].category) && (
              <div className="mt-4 text-center text-white">
                {images[currentImageIndex].title && (
                  <h3 className="text-xl font-medium">{images[currentImageIndex].title}</h3>
                )}
                {images[currentImageIndex].category && (
                  <p className="text-gray-300">{images[currentImageIndex].category}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
