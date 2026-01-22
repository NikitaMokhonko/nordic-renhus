import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "../components/Gallery";
import p1 from "../../public/Bygg-1.jpeg";
import p2 from "../../public/Bygg-2.jpeg";
import p3 from "../../public/Bygg-3.jpeg";
import p4 from "../../public/Bygg-4.jpeg";
import p5 from "../../public/Bygg-5.jpeg";
import { Welcome } from "@/components/Welcome";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Welcome />
      <div className="pb-10 flex flex-col justify-center text-center max-w-[80%] mx-auto">
        <h1 className="text-4xl font-semibold mb-4 sm:mb-10">
          Vi hjälper dig med alla typer av byggprojekt, stora som små
        </h1>
        <h2>
          Oavsett om du planerar en mindre renovering eller ett omfattande
          byggprojekt, är vårt erfarna team redo att förverkliga dina visioner. <br /> <br />
          Kontakta oss idag för en kostnadsfri konsultation och låt oss hjälpa dig
          att skapa ditt drömhem.
        </h2>
      </div>
      <Gallery images={[p1, p2, p3, p4, p5]} />
    </>
  );
}
