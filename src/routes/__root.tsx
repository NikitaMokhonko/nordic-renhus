import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Header";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  ),
});
