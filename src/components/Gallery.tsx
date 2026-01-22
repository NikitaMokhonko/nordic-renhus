import { useState } from "react";

type GalleryProps = {
  images: string[];
};

export function Gallery({ images }: GalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handlePrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  return (
    <div className="max-w-[99%] mx-auto pb-10">
      <div className="flex gap-1 sm:gap-3 overflow-x-auto snap-x snap-mandatory h-100 sm:h-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Projekt"
            onClick={() => setSelectedImageIndex(i)}
            className="snap-center shrink-0 w-[80%] h-full sm:h-170 sm:w-[23%] object-cover cursor-pointer"
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 bg-white rounded-full p-2 cursor-pointer"
          >
            <img src="left.svg" alt="previous" className="w-8 h-8" />
          </button>
          <img
            src={images[selectedImageIndex]}
            alt="Projekt"
            className="object-cover max-w-[95%] max-h-[95%]"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 bg-white rounded-full p-2 cursor-pointer"
          >
            <img src="right.svg" alt="next" className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
}
