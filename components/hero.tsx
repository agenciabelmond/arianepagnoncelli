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
      title: "Mapa da Saúde",
      desc: "Um relatório visual personalizado que integra metabolismo, hormônios, hábitos e objetivos clínicos em uma leitura única da sua saúde.",
    },
    {
      title: "Símbolo Tsuru",
      desc: "Inspirado no símbolo japonês de equilíbrio e longevidade, cada mapa representa sua trajetória individual de cuidado e transformação.",
    },
    {
      title: "Ciência Atualizada",
      desc: "Condutas baseadas em evidências científicas e atualizações constantes para resultados seguros e consistentes.",
    },
  ];

  return (
    <main
      className="relative min-h-[72vh] overflow-hidden"
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
        <div
          style={{
            position: "absolute",
            top: "18%",
            left: "12%",
            width: "6px",
            height: "6px",
            borderRadius: "999px",
            background: colors.sage,
            opacity: 0.4,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "22%",
            right: "18%",
            width: "4px",
            height: "4px",
            borderRadius: "999px",
            background: colors.taupe,
            opacity: 0.35,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "45%",
            right: "10%",
            width: "8px",
            height: "8px",
            borderRadius: "999px",
            background: colors.blush,
            opacity: 0.25,
          }}
        />
      </div>

      {/* GLOW */}
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
        className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-12 pt-4 md:pt-10 pb-12 md:pb-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT */}
          <div className="w-full md:w-[54%] flex flex-col items-start">

            {/* TAG */}
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

            {/* NAME */}
            <h1 data-animate style={{ lineHeight: 0.92, marginTop: "6px" }}>
              <span
                style={{
                  fontFamily: "'Italiana', serif",
                  fontSize: "clamp(56px, 8vw, 104px)",
                  color: colors.brown,
                  display: "block",
                }}
              >
                Ariane
              </span>

              <span
                style={{
                  fontFamily: "'Italiana', serif",
                  fontSize: "clamp(50px, 7vw, 96px)",
                  color: colors.taupe,
                  display: "block",
                  marginTop: "-10px",
                }}
              >
                Pagnoncelli
              </span>
            </h1>

            {/* CRM */}
            <p
              data-animate
              style={{
                marginTop: "16px",
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(123,110,102,0.82)",
              }}
            >
              CRM-RJ 108.910-2 · RQE 30.309
            </p>

            {/* DIVIDER */}
            <div
              data-animate
              style={{
                width: "84px",
                height: "1px",
                margin: "22px 0",
                background: `linear-gradient(90deg, ${colors.taupe}, ${colors.sage})`,
                opacity: 0.9,
              }}
            />

            {/* SUBTEXT */}
            <p
              data-animate
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "16px",
                lineHeight: 1.95,
                color: "rgba(90,78,72,0.92)",
                marginTop: "10px",
                maxWidth: "620px",
              }}
            >
Endocrinologia para a mulher que quer entender o próprio corpo - obesidade, tireoide, metabolismo, perimenopausa e longevidade, 
com medicina baseada em evidências e tempo de consulta de verdade.
            </p>

            {/* CTA ROW */}
            <div
              data-animate
              className="flex flex-col sm:flex-row gap-4 mt-9 w-full items-center md:items-start justify-center md:justify-start"
            >
              {/* AGENDAR PRIMEIRO */}
              <a
                href="https://wa.me/555521972646121?text=Olá! Vim pelo site e gostaria de agendar uma consulta."
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
                  padding: "15px 34px",
                  borderRadius: "999px",
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.08em",
                  boxShadow: "0 18px 40px rgba(123,110,102,0.25)",
                  textDecoration: "none",
                }}
              >
                Agendar consulta
              </a>

              {/* MAPA + INSTAGRAM */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center">

                {/* MAPA SEGUNDO */}
                <a
                  href="#mapa-da-saude"
                  className="
                    transition-all duration-300
                    hover:scale-[1.03]
                    inline-flex
                    items-center
                    justify-center
                  "
                  style={{
                    border: `1px solid ${colors.taupe}`,
                    color: colors.brown,
                    padding: "15px 34px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.25)",
                    backdropFilter: "blur(10px)",
                    fontFamily: "'Jost', sans-serif",
                    textDecoration: "none",
                  }}
                >
                  Conhecer o Mapa da Saúde
                </a>

                {/* INSTAGRAM ICON */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-all duration-500
                    hover:scale-[1.12]
                    hover:-translate-y-1
                  "
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.65)",
                    background: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(14px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow:
                      "0 10px 30px rgba(214,41,118,0.18), 0 4px 12px rgba(79,91,213,0.12)",
                  }}
                >
                  {/* ORB GLOW */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-6px",
                      borderRadius: "999px",
                      background:
                        "radial-gradient(circle, rgba(214,41,118,0.18), rgba(79,91,213,0.10), transparent 70%)",
                      filter: "blur(10px)",
                      zIndex: 0,
                    }}
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <defs>
                      <linearGradient
                        id="instagramGradient"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#feda75" />
                        <stop offset="25%" stopColor="#fa7e1e" />
                        <stop offset="50%" stopColor="#d62976" />
                        <stop offset="75%" stopColor="#962fbf" />
                        <stop offset="100%" stopColor="#4f5bd5" />
                      </linearGradient>
                    </defs>

                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      stroke="url(#instagramGradient)"
                      strokeWidth="1.8"
                    />

                    <path
                      d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z"
                      stroke="url(#instagramGradient)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"
                      stroke="url(#instagramGradient)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-animate
            className="w-full md:w-[44%] flex justify-center md:justify-end"
          >
            <div className="relative">

              {/* OUTER GLOW */}
              <div
                className="absolute -inset-6 rounded-[40px] blur-[80px]"
                style={{
                  background: `
                    radial-gradient(circle at top, rgba(168,176,163,0.20), transparent 60%),
                    radial-gradient(circle at bottom, rgba(216,184,177,0.14), transparent 60%)
                  `,
                }}
              />

              {/* IMAGE CONTAINER */}
              <div
                style={{
                  width: "clamp(300px, 34vw, 430px)",
                  height: "clamp(380px, 44vw, 560px)",
                  borderRadius: "42px",
                  border: `1px solid rgba(179,155,143,0.55)`,
                  overflow: "hidden",
                  boxShadow: "0 40px 90px rgba(123,110,102,0.18)",
                  position: "relative",
                }}
              >
                <img
                  src="/fotoariane.png"
                  alt="Dra. Ariane Pagnoncelli"
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(60,52,48,0.18), transparent 35%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div
          data-animate
          className="mt-10 grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-[28px]"
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
                padding: "34px 30px 38px 30px",
              }}
            >
              {/* INNER GLOW */}
              <div
                style={{
                  position: "absolute",
                  inset: "6px",
                  borderRadius: "22px",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.10))",
                  zIndex: 0,
                }}
              />

              {/* LEFT BAR */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "20px",
                  bottom: "20px",
                  width: "2px",
                  background: colors.sage,
                  opacity: 0.7,
                  borderRadius: "2px",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: colors.brown,
                    marginBottom: "14px",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.9,
                    color: "rgba(123,110,102,0.88)",
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