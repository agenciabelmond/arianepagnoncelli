"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Clock, HeartHandshake, Microscope, Users } from "lucide-react";

const palette = {
  offWhite: "#F4F1EC",
  beige: "#DDD3CB",
  greige: "#CFC7C0",
  taupe: "#B39B8F",
  brown: "#7B6E66",
  sage: "#A8B0A3",
  blush: "#D8B8B1",
};

const differentials = [
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    description:
      "Cada consulta é um momento de escuta atenta, onde você se sente acolhido e suas preocupações são levadas a sério.",
    accent: palette.blush,
  },
  {
    icon: Microscope,
    title: "Medicina Baseada em Evidências",
    description:
      "Tratamentos e condutas fundamentados nas mais recentes pesquisas científicas e diretrizes médicas.",
    accent: palette.sage,
  },
  {
    icon: Clock,
    title: "Consultas sem Pressa",
    description:
      "Tempo adequado para entender sua história, explicar diagnósticos e esclarecer todas as suas dúvidas.",
    accent: palette.taupe,
  },
  {
    icon: Users,
    title: "Abordagem Multidisciplinar",
    description:
      "Trabalho integrado com outros profissionais de saúde quando necessário para o melhor resultado do tratamento.",
    accent: palette.blush,
  },
];

export function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % differentials.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + differentials.length) % differentials.length);

  const active = differentials[current];
  const Icon = active.icon;

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: palette.taupe }}
    >
      {/* Ambient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B6E66]/70 via-transparent to-[#A8B0A3]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,110,102,0.18),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span
              className="text-[9px] tracking-[0.4em] uppercase"
              style={{
                fontFamily: "Jost, sans-serif",
                color: palette.offWhite,
              }}
            >
              03 · Diferenciais
            </span>

            <h2
              className="text-[2.8rem] md:text-[4rem] leading-[0.9] tracking-tight"
              style={{
                fontFamily: "Italiana, serif",
                color: palette.offWhite,
              }}
            >
              Por que escolher
            </h2>
          </div>

          <p
            className="text-[1.1rem] leading-[1.7] max-w-[38ch] md:text-right"
            style={{
              fontFamily: "Jost, sans-serif",
              color: "rgba(244,241,236,0.85)",
            }}
          >
            Uma prática médica centrada no paciente, onde a excelência técnica
            encontra o cuidado genuíno.
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">

          <p
            className="text-center text-xs mb-4 animate-pulse"
            style={{
              fontFamily: "Jost, sans-serif",
              color: "rgba(244,241,236,0.7)",
            }}
          >
            ← Arraste para o lado →
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const threshold = 80;
                if (info.offset.x < -threshold) next();
                if (info.offset.x > threshold) prev();
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <div
                className="relative flex flex-col p-7 rounded-[4px]"
                style={{
                  background: palette.offWhite,
                  border: `1px solid ${palette.greige}`,
                  backdropFilter: "blur(14px)",
                  boxShadow: `0 18px 40px rgba(123,110,102,0.18)`,
                }}
              >
                {/* Accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px]"
                  style={{ background: active.accent }}
                />

                {/* Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: `${active.accent}22`,
                      border: `1px solid ${active.accent}55`,
                    }}
                  >
                    <Icon className="w-4 h-4" color={palette.brown} />
                  </div>

                  <span
                    className="text-[9px] tracking-[0.25em]"
                    style={{
                      color: palette.brown,
                      fontFamily: "Jost, sans-serif",
                    }}
                  >
                    0{current + 1}
                  </span>
                </div>

                <h3
                  className="text-[0.9rem] uppercase mb-3 tracking-[0.14em]"
                  style={{
                    fontFamily: "Cinzel, serif",
                    color: palette.brown,
                  }}
                >
                  {active.title}
                </h3>

                <p
                  className="text-[13.5px] leading-[1.75]"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: palette.brown,
                  }}
                >
                  {active.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {differentials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  current === i ? "w-8" : "w-2"
                }`}
                style={{
                  background:
                    current === i
                      ? palette.offWhite
                      : "rgba(244,241,236,0.3)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">

          {differentials.map((item, i) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative flex flex-col p-8 rounded-[4px]"
                style={{
                  background: palette.offWhite,
                  border: `1px solid ${palette.greige}`,
                  backdropFilter: "blur(14px)",
                  boxShadow: `0 18px 40px rgba(123,110,102,0.18)`,
                }}
              >
                {/* Accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px]"
                  style={{ background: item.accent }}
                />

                {/* Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: `${item.accent}22`,
                      border: `1px solid ${item.accent}55`,
                    }}
                  >
                    <IconComp className="w-4 h-4" color={palette.brown} />
                  </div>

                  <span
                    className="text-[9px] tracking-[0.25em]"
                    style={{
                      color: palette.brown,
                      fontFamily: "Jost, sans-serif",
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3
                  className="text-[0.9rem] uppercase mb-3 tracking-[0.14em]"
                  style={{
                    fontFamily: "Cinzel, serif",
                    color: palette.brown,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-[13.5px] leading-[1.75]"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: palette.brown,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}