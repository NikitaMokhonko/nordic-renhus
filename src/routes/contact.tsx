import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center pt-15 lg:pt-20 bg-black text-white text-center mx-auto">
        <h1 className="text-4xl font-bold mb-15">Kontakta Oss</h1>
        <a href="mailto:nordicrenhus@gmail.com" className="mt-2 mb-2 cursor-pointer">nordicrenhus@gmail.com</a>
        <a href="tel:+46000000000" className="mb-12 cursor-pointer">+46 00 000 00 00</a>
        <p className="font-semibold mb-2">Nordic Renhus AB</p>
        <p>Bruksvägen 3, lgh 1108</p>
        <p>165 65 Hässelby</p>
        <p>Stockholm, Sverige</p>
      </div>
    </>
  );
}
