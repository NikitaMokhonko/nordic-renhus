import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  return (
    <>
      <h1>Våra tjänster</h1>

      <h3>Rivning & demontering</h3>
      <ul>
        <li>Säker rivning av alla typer av byggnader</li>
        <li>Sortering och bortforsling av byggavfall</li>
      </ul>

      <h3>Markarbeten</h3>
      <ul>
        <li>Schaktning och markberedning</li>
        <li>Dränering och dagvattenlösningar</li>
      </ul>
    </>
  );
}
