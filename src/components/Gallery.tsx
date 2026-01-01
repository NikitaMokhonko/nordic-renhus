import { useState } from "react";
import p1 from "../../public/Bygg-1.jpeg";
import p2 from "../../public/Bygg-2.jpeg";
import p3 from "../../public/Bygg-3.jpeg";

const images = [p1, p2, p3];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[90%] sm:max-w-[80%] mx-auto">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Projekt"
          onClick={() => setSelectedImage(img)}
          className="w-full h-60 object-cover cursor-pointer"
        />
      ))}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <img
            src={selectedImage}
            alt="Projekt"
            className="object-contain max-w-[95%] max-h-[95%]"
          />
        </div>
      )}
    </div>
  );
}
