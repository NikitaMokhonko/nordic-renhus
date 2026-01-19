import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-100 text-center mx-auto mt-10">
        <h1 className="font-bold text-xl mb-10">Om Nordic Renhus AB</h1>
        <p>
          Nordic Renhus AB är ett erfaret byggföretag med specialistkompetens
          inom rivning, markarbeten och grundläggning.
        </p>
      </div>
    </>
  );
}
