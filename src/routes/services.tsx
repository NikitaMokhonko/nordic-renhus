import { Gallery } from "@/components/Gallery";
import { createFileRoute } from "@tanstack/react-router";
import p1 from "../../public/Bygg-1.jpeg";
import p2 from "../../public/Bygg-2.jpeg";
import p3 from "../../public/Bygg-3.jpeg";
import p4 from "../../public/Bygg-4.jpeg";
import p5 from "../../public/Bygg-5.jpeg";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col min-h-screen items-center mt-10 text-center sm:max-w-[70%] mx-auto">
        <h1 className="text-xl font-bold mb-10">Våra tjänster</h1>
        <div className="max-w-[70%]">
          <h3 className="mb-5 font-semibold">Rivning & demontering</h3>
          <h4 className="mb-10">
            Vi erbjuder professionella rivnings- och demonteringstjänster alla
            typer av objekt. <br />
            Vårt team är utrustat för att hantera allt från mindre
            inomhusprojekt till större strukturella rivningar.
          </h4>
        </div>
        <Gallery images={[p1, p2, p3, p4, p5]} />
        <div className="max-w-[70%]">
          <h3 className="mb-5 font-semibold">Markarbeten</h3>
          <h4 className="mb-10">
            Våra markarbetstjänster omfattar allt från grundläggning och
            dränering till landskapsformning och vägkonstruktion.
          </h4>
        </div>
        <Gallery images={[p1, p2, p3, p4, p5]} />
        <div className="max-w-[70%]">
          <h3 className="mb-5 font-semibold">Nyckelfärdiga Hus</h3>
          <h4 className="mb-10">
            Vi bygger ditt drömhem från grunden till inflyttningsklart skick.
            Vårt erfarna team hanterar alla aspekter av byggprocessen, inklusive
            design, materialval och konstruktion.
          </h4>
        </div>
        <Gallery images={[p1, p2, p3, p4, p5]} />
        <div className="max-w-[70%]">
          <h3 className="mb-5 font-semibold">Isolering</h3>
          <h4 className="mb-10">
            Vi erbjuder högkvalitativa isoleringstjänster för att förbättra
            energieffektiviteten i ditt hem eller kommersiella byggnad. Våra
            lösningar inkluderar både termisk och akustisk isolering.
          </h4>
        </div>
        <Gallery images={[p1, p2, p3, p4, p5]} />
        <div className="max-w-[70%]">
          <h1 className=" text-2xl mt-5 mb-10 font-semibold">
            Hittar du inte det du söker?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => navigate({ to: "/contact" })}
            >
              Kontakta oss
            </span>{" "}
            för skräddarsydda lösningar!
          </h1>
        </div>
      </div>
    </>
  );
}
