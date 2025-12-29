import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Gallery } from "../components/Gallery";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Nordic Renhus AB</h1>
      <p>
        Pålitliga bygg- och rivningsarbeten i Sverige. Helhetslösningar inom
        rivning, markarbeten och grundläggning.
      </p>

      <button onClick={() => navigate({ to: "/contact" })}>Kontakta oss</button>

      <h2>Tidigare projekt</h2>
      <Gallery />
    </>
  );
}
