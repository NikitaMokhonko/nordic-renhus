import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-xl font-bold mb-10">Våra tjänster</h1>

        <h3 className="mb-5 font-semibold">Rivning & demontering</h3>
        <ul className="mb-10">
          <li>Säker rivning av alla typer av byggnader</li>
          <li>Sortering och bortforsling av byggavfall</li>
        </ul>

        <h3 className="mb-5 font-semibold">Markarbeten</h3>
        <ul>
          <li>Schaktning och markberedning</li>
          <li>Dränering och dagvattenlösningar</li>
        </ul>
      </div>
    </>
  );
}
