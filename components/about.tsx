export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-8 md:py-14"
      style={{ background: "#B39B8F" }}
    >
      {/* fundos (mantidos) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B6E66]/70 via-transparent to-[#A8B0A3]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,184,177,0.22),transparent_70%)]" />

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E<filter id='noise'>%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E</filter>%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-10">

        {/* HEADER mais equilibrado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span
            className="text-[9px] tracking-[0.4em] uppercase text-[#F4F1EC]"
            style={{ fontFamily: "var(--font-dm-mono, monospace)" }}
          >
            01 · Sobre
          </span>

          <h2
            className="mt-3 text-[2.8rem] md:text-[4.6rem] leading-[0.92] tracking-tight text-[#F4F1EC]"
            style={{ fontFamily: "var(--font-italiana, Georgia, serif)" }}
          >
            Cuidado que{" "}
            <span className="text-[#5A463A]">transforma</span>
          </h2>

          <p
            className="mt-5 text-[1rem] md:text-[1.1rem] leading-[1.8] text-[#F4F1EC]/85"
            style={{ fontFamily: "var(--font-jost, sans-serif)" }}
          >
            A Endocrinologia que une ciência, precisão clínica e escuta qualificada
            para promover equilíbrio hormonal, saúde metabólica e qualidade de vida.
          </p>
        </div>

        {/* GRID equilibrado */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">

          {/* ESQUERDA: atuação + escopo */}
          <div className="flex flex-col gap-6">

            <div className="rounded-[34px] border border-[#7B6E66]/30 bg-[#F4F1EC]/10 backdrop-blur-md p-7 md:p-8">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#5A463A]">
                Endocrinologia e Metabologia
              </span>

              <h3 className="mt-5 text-[2rem] leading-[1.05] text-[#F4F1EC]">
                Saúde hormonal com estratégia
                <br />
                e acompanhamento contínuo
              </h3>

              <p className="mt-5 text-[15px] leading-[1.9] text-[#5A463A]">
                Atuação em saúde hormonal feminina, perimenopausa, tireoide,
                diabetes tipo 2 e obesidade, com decisões clínicas compartilhadas
                e base científica atualizada.
              </p>
            </div>

            <div className="rounded-[30px] border border-[#7B6E66]/20 bg-[#7B6E66]/85 backdrop-blur-xl p-7">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D8B8B1]">
                Filosofia de atendimento
              </p>

              <p className="mt-4 text-[15px] leading-[1.9] text-[#F4F1EC]/85">
                Cada paciente é único. O cuidado é construído a partir da história
                clínica, rotina, sintomas e objetivos individuais, com decisões
                compartilhadas e foco em resultados sustentáveis.
              </p>
            </div>
          </div>

          {/* DIREITA: identidade profissional + posicionamento */}
          <div className="flex flex-col gap-6">

            <div className="rounded-[34px] border border-[#F4F1EC]/10 bg-white/5 backdrop-blur-sm p-7 md:p-8">

              <p
                className="uppercase tracking-[0.22em] text-[#F4F1EC] text-[12px] mb-3 font-semibold"
                style={{ fontFamily: "var(--font-cinzel, serif)" }}
              >
                Dra. Ariane Pagnoncelli Silva e Silva
              </p>

              <div className="h-px w-full bg-gradient-to-r from-[#D8B8B1]/50 via-[#A8B0A3]/30 to-transparent mb-5" />

              <p className="text-[15px] leading-[1.9] text-[#F4F1EC]/90">
                CRM-RJ 108.910-2 · RQE 30.309 — Endocrinologia e Metabologia.
                Médica com 7 anos de experiência clínica, atuando em saúde hormonal
                e metabólica com abordagem individualizada e acompanhamento contínuo.
              </p>
            </div>

            <div className="rounded-[30px] border border-[#7B6E66]/25 bg-[#F4F1EC]/10 backdrop-blur-md p-7">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#5A463A]">
                Atuação profissional
              </p>

              <p className="mt-4 text-[15px] leading-[1.9] text-[#F4F1EC]/85">
                Cofundadora da Pagnoncelli & Silva Consultório Médico e Odontológico
                (desde 2019), com prática centrada em vínculo médico-paciente,
                consistência terapêutica e medicina baseada em evidências.
              </p>
            </div>

          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[#7B6E66]/30 to-transparent" />
      </div>
    </section>
  );
}