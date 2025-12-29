import { useNavigate } from "@tanstack/react-router";
import logo from "../../public/logo.jpeg";
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Hem" },
    { path: "/about", label: "Om oss" },
    { path: "/services", label: "Tjänster" },
    { path: "/contact", label: "Kontakt" },
  ];

  const navLinks = links.map((link) => (
    <button
      key={link.path}
      onClick={() => {
        navigate({ to: link.path });
        setMenuOpen(false);
      }}
      className="group flex-col cursor-pointer bg-transparent px-3 py-1"
      aria-label={link.label}
      type="button"
    >
      <span className="text-lg font-semibold">{link.label}</span>
      <span className="block h-px bg-white w-full transform mt-0.5 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100" />
    </button>
  ));

  return (
    <header className="flex flex-col bg-black text-white border-b">
      <div className="flex justify-between items-center pr-10 sm:pr-0 sm:px-5">
        <img
          src={logo}
          alt="Nordic Renhus AB"
          className="h-28 w-28"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate({ to: "/" });
            setMenuOpen(false);
          }}
        />

        <div className="hidden sm:flex space-x-20 mx-10">{navLinks}</div>

        <button
          className="sm:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
          type="button"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden flex flex-col bg-black p-5 text-lg space-y-5 border-b">
          {navLinks}
        </div>
      )}
    </header>
  );
}
