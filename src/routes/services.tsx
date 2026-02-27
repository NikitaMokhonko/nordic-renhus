import { Gallery } from "@/components/Gallery";
import { createFileRoute } from "@tanstack/react-router";
import p1 from "../../public/Bygg-1.jpeg";
import p2 from "../../public/Bygg-2.jpeg";
import p3 from "../../public/Bygg-3.jpeg";
import p4 from "../../public/Bygg-4.jpeg";
import p5 from "../../public/Bygg-5.jpeg";
import hus1 from "../../public/hus1.jpg";
import hus2 from "../../public/hus2.jpg";
import hus3 from "../../public/hus3.jpg";
import hus4 from "../../public/hus4.jpg";
import hus6 from "../../public/hus6.jpg";
import hus7 from "../../public/hus7.jpg";
import renhus1 from "../../public/renhus1.jpg";
import renhus2 from "../../public/renhus2.jpg";
import bygg10 from "../../public/Bygg-10.jpeg";
import renhus3 from "../../public/renhus3.jpg";
import kok1 from "../../public/kok1.jpg";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col min-h-screen items-center pt-15 lg:pt-20 text-white bg-black text-center mx-auto">
        <h1 className="text-4xl font-bold mb-15 lg:mb-20">Våra tjänster</h1>
        <div className="w-[80%] lg:w-[50%] lg:border-x border-[#e21c1f] rounded-4xl p-5 mb-15 bg-linear-to-t from-black to-transparent">
          <h3 className="mb-5 font-semibold text-xl">Rivningar</h3>
          <h4 className="">
            Vi erbjuder professionella rivningstjänster för alla typer av
            objekt. <br />
            Vårt team är utrustat för att hantera allt från mindre
            inomhusprojekt till större strukturella rivningar.
          </h4>
        </div>
        <div className="sm:max-w-[75%]">
          <Gallery rounded={false} images={[p1, p2, p3, p4, p5]} />
        </div>

        <div className="w-[80%] lg:w-[50%] lg:border-x border-[#e21c1f] rounded-4xl p-5 mb-15 mt-15">
          <h3 className="mb-5 font-semibold text-xl">Markarbeten</h3>
          <h4 className="">
            Våra markarbetstjänster omfattar allt från grundläggning och
            dränering till landskapsformning och vägkonstruktion.
          </h4>
        </div>
        <div className="sm:max-w-[75%]">
          <Gallery rounded={false} images={[p1, p2, p3, p4, p5]} />
        </div>
        <div className="w-[80%] lg:w-[50%] lg:border-x border-[#e21c1f] rounded-4xl p-5 mb-15 mt-15">
          <h3 className="mb-5 font-semibold text-xl">Husgrunder</h3>
          <h4 className="">
            Vi erbjuder pålitliga och hållbara husgrundstjänster, inklusive
            utförande av grundläggning, betonggjutning och isolering. Vårt
            erfarna team säkerställer att din husgrund är stabil och byggd för
            att hålla i många år framöver.
          </h4>
        </div>
        <div className="sm:max-w-[75%]">
          <Gallery rounded={false} images={[hus7, p1, bygg10, p3]} />
        </div>
        <div className="w-[80%] lg:w-[50%] lg:border-x border-[#e21c1f] rounded-4xl p-5 mb-15 mt-15">
          <h3 className="mb-5 font-semibold text-xl">Isolering</h3>
          <h4 className="">
            Vi erbjuder högkvalitativa isoleringstjänster för att förbättra
            energieffektiviteten i ditt hem eller kommersiella byggnad. Våra
            lösningar inkluderar både termisk och akustisk isolering.
          </h4>
        </div>
        <div className="sm:max-w-[75%]">
          <Gallery rounded={false} images={[p1, p2, p3, p4, p5]} />
        </div>
        <div className="w-[80%] lg:w-[50%] lg:border-x border-[#e21c1f] rounded-4xl p-5 mb-15 mt-15">
          <h3 className="mb-5 font-semibold text-xl">Inomhusarbeten</h3>
          <h4 className="">
            Vi erbjuder omfattande inomhusarbeten, inklusive renoveringar,
            ombyggnationer och inredningsprojekt. Vi gör allt från badrum till
            kök, och arbetar nära dig för att förverkliga dina visioner och
            skapa funktionella och estetiskt tilltalande utrymmen.
          </h4>
        </div>
        <div className="sm:max-w-[75%]">
          <Gallery rounded={false} images={[hus2, hus3, hus4, kok1]} />
        </div>
        <div className="w-[80%] lg:w-[50%] lg:border-x border-[#e21c1f] rounded-4xl p-5 mb-15 mt-15">
          <h3 className="mb-5 font-semibold text-xl">Nyckelfärdiga Hus</h3>
          <h4 className="">
            Vi bygger ditt drömhem från grunden till inflyttningsklart skick.
            Vårt erfarna team hanterar alla aspekter av byggprocessen, inklusive
            design, materialval och konstruktion.
          </h4>
        </div>
        <div className="sm:max-w-[75%]">
          <Gallery
            rounded={false}
            images={[renhus3, hus6, hus1, renhus1, renhus2]}
          />
        </div>
        <div className="max-w-[70%]">
          <h1 className=" text-2xl mt-15 mb-10 font-semibold">
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
