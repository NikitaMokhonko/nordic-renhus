import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <>
      <h1>Kontakt</h1>
      <p>
        <strong>Nordic Renhus AB</strong>
      </p>
      <p>Bruksvägen 3, lgh 1108</p>
      <p>165 65 Hässelby</p>
      <p>Stockholm, Sverige</p>
    </>
  );
}
