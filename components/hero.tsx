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
      {/* BACKGROUND ATMOSPHERIC LAYERS */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(179,155,143,0.35), transparent 60%),
            radial-gradient(circle at bottom right, rgba(168,176,163,0.25), transparent 60%)
          `,
        }}
      />

      {/* BLUSH GLOW */}
      <div
        className="absolute top-1/3 left-1/4 w-[520px] h-[520px] rounded-full blur-[180px]"
        style={{ backgroundColor: "rgba(216,184,177,0.18)" }}
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
              <span
                style={{
                  fontFamily: "'Italiana', serif",
                  fontSize: "clamp(52px, 7.5vw, 96px)",
                  color: colors.brown,
                  display: "block",
                }}
              >
                Ariane
              </span>

              <span
                style={{
                  fontFamily: "'Italiana', serif",
                  fontSize: "clamp(48px, 7vw, 90px)",
                  color: colors.taupe,
                  display: "block",
                  marginTop: "-8px",
                }}
              >
                Pagnoncelli
              </span>
            </h1>

            <div
              data-animate
              style={{
                width: "60px",
                height: "1px",
                backgroundColor: colors.taupe,
                margin: "18px 0",
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
    color: "rgba(90,78,72,0.92)", // mais escuro e sofisticado
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
              <button
                className="
                  w-full sm:w-auto
                  max-w-[320px]
                  sm:max-w-none
                  relative overflow-hidden
                  transition-all duration-300
                  hover:scale-[1.04]
                  hover:shadow-2xl
                  active:scale-95
                "
                style={{
                  background: `linear-gradient(135deg, ${colors.brown}, #5f554e)`,
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.08em",
                  boxShadow: "0 18px 40px rgba(123,110,102,0.25)",
                }}
              >
                Agendar consulta
              </button>

              <button
                className="
                  w-full sm:w-auto
                  max-w-[320px]
                  sm:max-w-none
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
                className="absolute -inset-5 rounded-[40px] blur-[70px]"
                style={{ backgroundColor: "rgba(216,184,177,0.16)" }}
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
                backgroundColor: "rgba(255,255,255,0.25)",
                padding: "28px 26px 34px 26px",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: colors.brown,
                  marginBottom: "10px",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.75,
                  color: "rgba(123,110,102,0.85)",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}