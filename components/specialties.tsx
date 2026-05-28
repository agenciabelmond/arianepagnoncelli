import {
  Activity,
  Heart,
  Scale,
  Sparkles,
  Thermometer,
  Zap,
} from "lucide-react"

// ─── PALLETA OFF-WHITE QUENTE ───────────────────────────────
// #F4F1EC  Off-white quente
// #DDD3CB  Bege nude
// #CFC7C0  Greige
// #B39B8F  Taupe Fendi
// #7B6E66  Marrom suave
// #A8B0A3  Sálvia
// #D8B8B1  Blush queimado

const specialties = [
  {
    icon: Thermometer,
    title: "Tireoide",
    description:
      "Diagnóstico e tratamento de hipotireoidismo, hipertireoidismo, nódulos tireoidianos e tireoidite de Hashimoto.",
    areas: ["Hipotireoidismo", "Hipertireoidismo", "Nódulos", "Hashimoto"],
    accent: "#D8B8B1",
  },

  {
    icon: Activity,
    title: "Diabetes",
    description:
      "Acompanhamento completo do diabetes tipo 1 e 2, pré-diabetes e suas complicações, com foco em qualidade de vida.",
    areas: ["Tipo 1", "Tipo 2", "Pré-diabetes", "Gestacional"],
    accent: "#A8B0A3",
  },

  {
    icon: Scale,
    title: "Obesidade",
    description:
      "Tratamento personalizado para obesidade e sobrepeso, com abordagem multidisciplinar, acompanhamento contínuo e suporte no pós-operatório da cirurgia bariátrica.",
    areas: [
      "Sobrepeso",
      "Obesidade",
      "Síndrome Metabólica",
      "Dislipidemias",
      "Pós Bariátrica",
    ],
    accent: "#B39B8F",
    featured: true,
  },

  {
    icon: Sparkles,
    title: "Menopausa & Saúde Hormonal",
    description:
      "Cuidado especializado para menopausa, climatério e distúrbios hormonais femininos, com foco em equilíbrio hormonal, bem-estar e qualidade de vida.",
    areas: ["Menopausa", "Climatério", "Reposição Hormonal", "SOP"],
    accent: "#D8B8B1",
    featured: true,
  },

  {
    icon: Heart,
    title: "Metabolismo Ósseo",
    description:
      "Prevenção e tratamento de osteoporose, deficiência de vitamina D e distúrbios do cálcio.",
    areas: ["Osteoporose", "Vitamina D", "Cálcio", "Paratireoide"],
    accent: "#A8B0A3",
  },

  {
    icon: Zap,
    title: "Adrenais e Hipófise",
    description:
      "Investigação e tratamento de distúrbios das glândulas adrenais e hipófise.",
    areas: ["Adrenais", "Hipófise", "Cortisol", "Hormônio do Crescimento"],
    accent: "#B39B8F",
  },
]

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="relative overflow-hidden py-14 md:py-20"
      style={{
        background: `
          linear-gradient(
            150deg,
            #F4F1EC 0%,
            #DDD3CB 35%,
            #CFC7C0 65%,
            #A8B0A3 100%
          )
        `,
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "140px 140px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-[-100px] right-[-80px] w-[420px] h-[420px] rounded-full blur-[160px] bg-[#B39B8F]/25 pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[280px] h-[280px] rounded-full blur-[120px] bg-[#A8B0A3]/20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">

          <div>
            <span
              className="text-[9px] tracking-[0.4em] uppercase"
              style={{ color: "#7B6E66" }}
            >
              02 · Especialidades
            </span>

            <h2
              className="text-[2.5rem] md:text-[3.5rem] leading-[0.95] tracking-tight"
              style={{
                fontFamily: "var(--font-italiana, Georgia, serif)",
                color: "#7B6E66",
              }}
            >
              Áreas de{" "}
              <span style={{ color: "#B39B8F" }}>atuação</span>
            </h2>
          </div>

          <p
            className="text-[1rem] leading-[1.6] max-w-[38ch] md:text-right"
            style={{ color: "#7B6E66" }}
          >
            Atendimento especializado em diversas condições endocrinológicas,
            sempre com abordagem individualizada e baseada em evidências.
          </p>
        </div>

        {/* Divider */}
        <div
          className="mb-6 h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(179,155,143,0.35) 30%, rgba(123,110,102,0.25) 60%, transparent)",
          }}
        />

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">

          {specialties.map((s, i) => (
            <div
              key={s.title}
              className={`
                group relative flex flex-col
                p-5 md:p-6
                rounded-[3px]
                transition-all duration-300
                hover:-translate-y-[3px]
                hover:shadow-[0_12px_30px_rgba(47,36,31,0.10)]
                ${s.featured ? "md:scale-[1.02]" : ""}
              `}
              style={{
                background: s.featured
                  ? "linear-gradient(180deg, rgba(244,241,236,0.96), rgba(221,211,203,0.92))"
                  : "rgba(244,241,236,0.78)",

                border: s.featured
                  ? "1px solid rgba(216,184,177,0.75)"
                  : "1px solid rgba(207,199,192,0.75)",

                backdropFilter: "blur(8px)",
              }}
            >
              {/* TOP LINE */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full transition-all duration-300 group-hover:left-4 group-hover:right-4"
                style={{
                  background: s.accent,
                  opacity: 0.9,
                }}
              />

              {/* FEATURED BADGE */}
              {s.featured && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-[8px] tracking-[0.25em] uppercase"
                  style={{
                    background: "rgba(216,184,177,0.16)",
                    border: "1px solid rgba(216,184,177,0.35)",
                    color: "#B39B8F",
                    fontFamily: "var(--font-dm-mono, monospace)",
                  }}
                >
                  Destaque
                </div>
              )}

              {/* ICON */}
              <div className="flex items-center justify-between mb-4">

                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: `${s.accent}22`,
                    border: `1px solid ${s.accent}55`,
                  }}
                >
                  <s.icon className="w-4 h-4 text-[#7B6E66]" />
                </div>

                <span
                  className="text-[9px] tracking-[0.25em]"
                  style={{ color: s.accent }}
                >
                  0{i + 1}
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="uppercase mb-2 tracking-[0.14em] text-[0.85rem]"
                style={{
                  fontFamily: "var(--font-cinzel, serif)",
                  color: "#7B6E66",
                }}
              >
                {s.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="leading-[1.6] mb-4 text-[13px]"
                style={{
                  fontFamily: "var(--font-jost, sans-serif)",
                  color: "#7B6E66",
                }}
              >
                {s.description}
              </p>

              {/* DIVIDER */}
              <div
                className="mb-3 h-px"
                style={{
                  background: s.featured
                    ? "rgba(216,184,177,0.35)"
                    : "rgba(207,199,192,0.45)",
                }}
              />

              {/* TAGS */}
              <div className="flex flex-wrap gap-[4px]">

                {s.areas.map((area) => (
                  <span
                    key={area}
                    className="text-[7.5px] tracking-[0.2em] uppercase px-[8px] py-[4px] rounded-full"
                    style={{
                      fontFamily: "var(--font-dm-mono, monospace)",
                      color: "#7B6E66",
                      background: s.featured
                        ? "rgba(216,184,177,0.12)"
                        : "rgba(221,211,203,0.6)",
                      border: s.featured
                        ? "1px solid rgba(216,184,177,0.35)"
                        : "1px solid rgba(179,155,143,0.35)",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div
          className="mt-8 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(123,110,102,0.25) 50%, transparent)",
          }}
        />
      </div>
    </section>
  )
}