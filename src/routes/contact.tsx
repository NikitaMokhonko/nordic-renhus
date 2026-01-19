import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center mt-10">
        <h1 className="text-xl font-bold mb-10">Kontakta Oss</h1>
        <p className="font-semibold mb-2">Nordic Renhus AB</p>
        <a href="mailto:nordicrenhus@gmail.com" className="mb-10 cursor-pointer">Nordicrenhus@gmail.com</a>
        <p>Bruksvägen 3, lgh 1108</p>
        <p>165 65 Hässelby</p>
        <p>Stockholm, Sverige</p>
      </div>
    </>
  );
}
