import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "../components/Gallery";
import p1 from "../../public/renhus3.jpg";
import p2 from "../../public/hus2.jpg";
import p3 from "../../public/Bygg-1.jpeg";
import p4 from "../../public/hus4.jpg";
import { Welcome } from "@/components/Welcome";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-black pb-10">
      <Welcome />
      <div className="max-w-[80%] mx-auto pb-10 pt-10 flex flex-col justify-center text-center text-white bg-black">
        <h1 className="text-4xl font-semibold mb-5 sm:mb-10">
          Vi hjälper dig med alla typer av byggprojekt, stora som små
        </h1>
        <h2>
          Oavsett om du planerar en mindre renovering eller ett omfattande
          byggprojekt, är vårt erfarna team redo att förverkliga dina visioner.{" "}
          <br /> <br />
          Kontakta oss idag för en kostnadsfri konsultation och låt oss hjälpa
          dig att skapa ditt drömhem.
        </h2>
      </div>
      <div className="max-w-full lg:max-w-[80%] mx-auto bg-black">
        <Gallery rounded={false} images={[p1, p2, p4, p3]} />
      </div>
      <p className="text-white text-xl text-center mt-15">
        Kolla igenom alla våra tjänster{" "}
        <a
          onClick={() => navigate({ to: "/services" })}
          className="underline  cursor-pointer"
        >
          här
        </a>
        !
      </p>
    </div>
  );
}
