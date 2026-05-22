"use client";

import { useEffect, useRef } from "react";

const colors = {
  taupe: "#B39B8F",
  brown: "#7B6E66",
  sage: "#A8B0A3",
  blush: "#D8B8B1",
};

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = contentRef.current?.querySelectorAll("[data-animate]");
    if (!elements) return;

    elements.forEach((el, i) => {
      const element = el as HTMLElement;

      element.style.opacity = "0";
      element.style.transform = "translateY(14px)";

      setTimeout(() => {
        element.style.transition =
          "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, 70 * i + 60);
    });
  }, []);

  const cards = [
    {
      title: "Visão Integrativa",
      desc: "Enxergamos você como um todo — corpo, mente e estilo de vida conectados para uma saúde real e duradoura.",
    },
    {
      title: "Cuidado Individual",
      desc: "Cada consulta é uma escuta profunda, respeitando sua história, suas necessidades e seus objetivos.",
    },
    {
      title: "Ciência Atualizada",
      desc: "Condutas baseadas em evidências científicas e atualizações constantes para resultados seguros e consistentes.",
    },
  ];

  return (
    <main
      className="relative min-h-[85vh] overflow-hidden"
      style={{
        backgroundColor: "rgba(179,155,143,0.15)",
      }}
    >
      {/* BACKGROUND GRADIENTS */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(179,155,143,0.35), transparent 60%),
            radial-gradient(circle at bottom right, rgba(168,176,163,0.25), transparent 60%)
          `,
        }}
      />

      {/* FLOATING DOTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", top: "18%", left: "12%", width: "6px", height: "6px", borderRadius: "999px", background: colors.sage, opacity: 0.4 }} />
        <div style={{ position: "absolute", bottom: "22%", right: "18%", width: "4px", height: "4px", borderRadius: "999px", background: colors.taupe, opacity: 0.35 }} />
        <div style={{ position: "absolute", top: "45%", right: "10%", width: "8px", height: "8px", borderRadius: "999px", background: colors.blush, opacity: 0.25 }} />
      </div>

      {/* BLUSH + SAGE GLOW */}
      <div
        className="absolute top-1/3 left-1/4 w-[520px] h-[520px] rounded-full blur-[180px]"
        style={{
          background: `
            radial-gradient(circle, rgba(168,176,163,0.18), rgba(216,184,177,0.12))
          `,
        }}
      />

      {/* GRAIN TEXTURE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
          opacity: 0.08,
          mixBlendMode: "multiply",
        }}
      />

      {/* CONTENT */}
      <section
        ref={contentRef}
        className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-12 pt-10 md:pt-16 pb-16 md:pb-24"
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          {/* LEFT */}
          <div className="w-full md:w-[52%] flex flex-col items-start">

            <p
              data-animate
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "20px",
                letterSpacing: "0.08em",
                color: colors.brown,
              }}
            >
              Dra.
            </p>

            <h1 data-animate style={{ lineHeight: 0.9, marginTop: "6px" }}>
              <span style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(52px, 7.5vw, 96px)", color: colors.brown, display: "block" }}>
                Ariane
              </span>

              <span style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(48px, 7vw, 90px)", color: colors.taupe, display: "block", marginTop: "-8px" }}>
                Pagnoncelli
              </span>
            </h1>

            <div
              data-animate
              style={{
                width: "70px",
                height: "1px",
                margin: "18px 0",
                background: `linear-gradient(90deg, ${colors.taupe}, ${colors.sage})`,
                opacity: 0.9,
              }}
            />

            <p
              data-animate
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "20px",
                lineHeight: 1.7,
                color: colors.brown,
              }}
            >
              Saúde em equilíbrio
            </p>

            <p
              data-animate
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "15px",
                lineHeight: 1.85,
                color: "rgba(90,78,72,0.92)",
                marginTop: "14px",
                maxWidth: "560px",
              }}
            >
              Atendimento endocrinológico especializado em equilíbrio hormonal, saúde metabólica e longevidade — com ciência atualizada, tecnologia de excelência e cuidado humano altamente individualizado.
            </p>

            {/* BUTTONS */}
            <div
              data-animate
              className="flex flex-col sm:flex-row gap-4 mt-7 w-full items-center md:items-start justify-center md:justify-start"
            >
              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/555521972646121?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full sm:w-auto
                  max-w-[320px]
                  transition-all duration-300
                  hover:scale-[1.04]
                  hover:shadow-2xl
                  active:scale-95
                  inline-flex
                  items-center
                  justify-center
                "
                style={{
                  background: `linear-gradient(135deg, ${colors.brown}, #5f554e)`,
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.08em",
                  boxShadow: "0 18px 40px rgba(123,110,102,0.25)",
                  textDecoration: "none",
                }}
              >
                Agendar consulta
              </a>

<button
  className="
    w-full sm:w-auto
    max-w-[320px]
    transition-all duration-300
    hover:scale-[1.03]
  "
  style={{
    border: `1px solid ${colors.taupe}`,
    color: colors.brown,
    padding: "14px 32px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.25)",
    backdropFilter: "blur(10px)",
    fontFamily: "'Jost', sans-serif",
  }}
  onClick={() => {
    document.getElementById("sobre")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  onMouseEnter={(e) => {
    (e.currentTarget as HTMLElement).style.borderColor = colors.sage;
    (e.currentTarget as HTMLElement).style.boxShadow =
      "0 10px 30px rgba(168,176,163,0.25)";
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLElement).style.borderColor = colors.taupe;
    (e.currentTarget as HTMLElement).style.boxShadow = "none";
  }}
>
  Saiba mais
</button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-animate
            className="w-full md:w-[46%] flex justify-center md:justify-end"
          >
            <div className="relative">

              <div
                className="absolute -inset-6 rounded-[40px] blur-[80px]"
                style={{
                  background: `
                    radial-gradient(circle at top, rgba(168,176,163,0.20), transparent 60%),
                    radial-gradient(circle at bottom, rgba(216,184,177,0.14), transparent 60%)
                  `,
                }}
              />

              <div
                style={{
                  width: "clamp(280px, 34vw, 420px)",
                  height: "clamp(340px, 42vw, 520px)",
                  borderRadius: "40px",
                  border: `1px solid rgba(179,155,143,0.6)`,
                  overflow: "hidden",
                  boxShadow: "0 40px 90px rgba(123,110,102,0.18)",
                }}
              >
                <img
                  src="/fotoariane.png"
                  alt="Dra. Ariane Pagnoncelli"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div
          data-animate
          className="mt-12 grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-2xl"
          style={{
            border: `1px solid rgba(179,155,143,0.4)`,
            gap: "1px",
            backgroundColor: "rgba(179,155,143,0.25)",
          }}
        >
          {cards.map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                backgroundColor: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(14px)",
                padding: "28px 26px 34px 26px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "6px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.12))",
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "18px",
                  bottom: "18px",
                  width: "2px",
                  background: colors.sage,
                  opacity: 0.6,
                  borderRadius: "2px",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: colors.brown,
                    marginBottom: "12px",
                    fontWeight: 600,
                    fontSize: "20px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "rgba(123,110,102,0.85)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}