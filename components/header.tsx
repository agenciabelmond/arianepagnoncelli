"use client";

import { useState } from "react";
import { Instagram } from "lucide-react";

const colors = {
  taupe: "#B39B8F",
  brown: "#7B6E66",
  sage: "#A8B0A3",
  blush: "#D8B8B1",
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  const whatsappLink =
    "https://wa.me/555521972646121?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!";

  return (
    <header
      className="relative z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: "rgba(179,155,143,0.18)",
        borderColor: "rgba(123,110,102,0.25)",
      }}
    >
      <nav className="relative flex items-center justify-between px-8 py-3 max-md:px-5">

        {/* LOGO */}
        <div className="flex items-center">
          <a href="#home">
            <img
              src="/logo.png"
              alt="Logo Dra. Ariane"
              className="w-[42px] md:w-[54px] object-contain"
            />
          </a>
        </div>

        {/* MENU DESKTOP */}
        <ul className="flex gap-8 max-md:hidden">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="
                  relative text-[10px] font-medium tracking-[0.22em]
                  uppercase transition-all duration-500
                "
                style={{
                  color: colors.brown,
                }}
              >
                <span className="relative group">
                  {item.label}
                  <span
                    className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: colors.blush }}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* ACTIONS DESKTOP */}
        <div className="hidden md:flex items-center gap-2">

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/draarianepagnoncelli"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-500"
            style={{
              border: `1px solid ${colors.taupe}`,
              backgroundColor: "rgba(255,255,255,0.25)",
              color: colors.brown,
            }}
          >
            <Instagram size={14} strokeWidth={1.8} />
          </a>

          {/* BUTTON WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] font-semibold tracking-[0.22em] uppercase px-6 py-2.5 rounded-full transition-all duration-500"
            style={{
              backgroundColor: colors.blush,
              color: "#fff",
              boxShadow: "0 12px 30px rgba(216,184,177,0.35)",
            }}
          >
            Agendar Consulta
          </a>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="hidden max-md:flex items-center gap-2">

          {/* INSTAGRAM MOBILE */}
          <a
            href="https://www.instagram.com/draarianepagnoncelli"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              border: `1px solid ${colors.taupe}`,
              backgroundColor: "rgba(255,255,255,0.25)",
              color: colors.brown,
            }}
          >
            <Instagram size={14} strokeWidth={1.8} />
          </a>

          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center gap-[4px] w-9 h-9 rounded-full"
            style={{
              border: `1px solid ${colors.taupe}`,
              backgroundColor: "rgba(255,255,255,0.25)",
            }}
          >
            <span
              className="w-4 h-[1.5px] rounded-full transition-all duration-300"
              style={{
                backgroundColor: colors.brown,
                transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none",
              }}
            />
            <span
              className={`w-4 h-[1.5px] rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
              style={{ backgroundColor: colors.brown }}
            />
            <span
              className="w-4 h-[1.5px] rounded-full transition-all duration-300"
              style={{
                backgroundColor: colors.brown,
                transform: menuOpen ? "-rotate-45 translateY(-5px)" : "none",
              }}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`hidden max-md:flex absolute top-[74px] left-5 right-5 flex-col gap-5 rounded-[24px] p-6 backdrop-blur-xl transition-all duration-500 ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{
            backgroundColor: "rgba(179,155,143,0.20)",
            border: `1px solid ${colors.taupe}`,
            boxShadow: "0 20px 60px rgba(123,110,102,0.15)",
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[10px] font-semibold tracking-[0.18em] uppercase"
              style={{ color: colors.brown }}
            >
              {item.label}
            </a>
          ))}

          {/* MOBILE INSTAGRAM */}
          <a
            href="https://www.instagram.com/draarianepagnoncelli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-full text-[9px] font-semibold tracking-[0.18em] uppercase"
            style={{
              border: `1px solid ${colors.taupe}`,
              backgroundColor: "rgba(255,255,255,0.25)",
              color: colors.brown,
            }}
          >
            <Instagram size={13} />
            Instagram
          </a>

          {/* MOBILE WHATSAPP BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] font-semibold tracking-[0.22em] uppercase px-6 py-3 rounded-full text-center"
            style={{
              backgroundColor: colors.brown,
              color: "#fff",
              boxShadow: "0 12px 30px rgba(216,184,177,0.35)",
            }}
          >
            Agendar Consulta
          </a>
        </div>

      </nav>
    </header>
  );
}