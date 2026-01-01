import { useState } from "react";
import p1 from "../../public/Bygg-1.jpeg";
import p2 from "../../public/Bygg-2.jpeg";
import p3 from "../../public/Bygg-3.jpeg";

const images = [p1, p2, p3];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-row gap-5 max-w-[80%] mx-auto">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Projekt"
          onClick={() => setSelectedImage(img)}
          className="w-full h-60 cursor-pointer"
        />
      ))}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          

          className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center"    
        >
          <img src={selectedImage} alt="Projekt" className="w-4/5 h-4/5 object-contain" />
        </div>
      )}
    </div>
  );
}
