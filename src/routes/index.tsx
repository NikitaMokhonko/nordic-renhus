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
      <Gallery images={[p1, p2, p3, p4, p5]} />
    </>
  );
}
