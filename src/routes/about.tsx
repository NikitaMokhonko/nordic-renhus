import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Om Nordic Renhus AB</h1>
      <p>
        Nordic Renhus AB är ett erfaret byggföretag med specialistkompetens inom
        rivning, markarbeten och grundläggning.
      </p>

      <button onClick={() => navigate({ to: "/contact" })}>Kontakta oss</button>
    </>
  );
}
