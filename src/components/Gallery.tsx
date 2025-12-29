import { useNavigate } from "@tanstack/react-router";
import p1 from "../../public/Bygg-1.jpeg";
import p2 from "../../public/Bygg-2.jpeg";
import p3 from "../../public/Bygg-3.jpeg";

const images = [p1, p2, p3];

export function Gallery() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1rem",
      }}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Projekt"
          style={{ width: "100%", cursor: "pointer", borderRadius: 8 }}
              onClick={() => navigate({ to: "/services" })}
              className="w-40 h-40"
        />
      ))}
    </div>
  );
}
