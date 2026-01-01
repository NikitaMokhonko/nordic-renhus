import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Gallery } from "../components/Gallery";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Gallery />
    </>
  );
}
