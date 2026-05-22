export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-2 md:py-4"
      style={{ background: "#B39B8F" }}
    >
      {/* Fundo base (igual Differentials) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B6E66]/70 via-transparent to-[#A8B0A3]/30" />

      {/* Glow central blush */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,184,177,0.22),transparent_70%)]" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute top-[-120px] right-[-100px] w-[360px] h-[360px] rounded-full blur-[140px] bg-[#D8B8B1]/20 pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[240px] h-[240px] rounded-full blur-[120px] bg-[#A8B0A3]/20 pointer-events-none" />

      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7B6E66]/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">

          <div>
            <span
              className="text-[9px] tracking-[0.4em] uppercase text-[#F4F1EC]"
              style={{ fontFamily: "var(--font-dm-mono, monospace)" }}
            >
              01 · Sobre
            </span>

            <h2
              className="mt-2 text-[2.7rem] md:text-[4.4rem] leading-[0.92] tracking-tight text-[#F4F1EC]"
              style={{
                fontFamily: "var(--font-italiana, Georgia, serif)",
              }}
            >
              Cuidado que{" "}
              <span className="text-[#5A463A] drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                transforma
              </span>
            </h2>
          </div>

          {/* SOMENTE MOBILE */}
          <p
            className="text-[1rem] leading-[1.7] max-w-[38ch] text-[#F4F1EC]/85 md:hidden"
            style={{ fontFamily: "var(--font-jost, sans-serif)" }}
          >
            Atendimento médico humanizado com foco em equilíbrio hormonal,
            metabolismo e bem-estar integral.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-6 md:gap-10 items-center">

          {/* LEFT */}
          <div className="hidden md:flex relative flex-col gap-5">

            <div className="relative overflow-hidden rounded-[32px] border border-[#7B6E66]/30 bg-[#F4F1EC]/10 backdrop-blur-md p-7 md:p-8 shadow-[0_20px_80px_rgba(123,110,102,0.25)]">

              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

              <div className="relative z-10">

                <span className="text-[10px] uppercase tracking-[0.35em] text-[#5A463A]">
                  Endocrinologia Integrativa
                </span>

                <h3 className="mt-4 text-[2rem] md:text-[2.5rem] leading-[1.05] text-[#F4F1EC]">
                  Saúde com equilíbrio,
                  <br />
                  ciência e escuta.
                </h3>

                <p className="mt-5 text-[15px] leading-[1.8] text-[#5A463A] max-w-[32ch]">
                  Atendimento focado em metabolismo, reposição hormonal,
                  emagrecimento saudável e qualidade de vida.
                </p>

              </div>
            </div>

            <div className="md:absolute md:-bottom-2 md:-right-6 rounded-[28px] border border-[#7B6E66]/30 bg-[#7B6E66]/90 backdrop-blur-xl p-6 w-full md:w-[260px] shadow-[0_15px_60px_rgba(0,0,0,0.18)]">

              <p className="text-[11px] uppercase tracking-[0.25em] text-[#D8B8B1]">
                Abordagem
              </p>

              <p className="mt-3 text-[15px] leading-[1.7] text-[#DDD3CB]/90">
                Tratamentos personalizados com foco em bem-estar físico,
                hormonal e emocional.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5">

            <div>
              <p
                className="uppercase tracking-[0.22em] text-[#F4F1EC] text-[12px] mb-2 font-semibold"
                style={{ fontFamily: "var(--font-cinzel, serif)" }}
              >
                Dra. Ariane Pagnoncelli
              </p>

              <div className="h-px w-full bg-gradient-to-r from-[#D8B8B1]/50 via-[#A8B0A3]/30 to-transparent" />
            </div>

            <p className="text-[15px] leading-[1.9] text-[#F4F1EC]/90">
              A Dra. Ariane Pagnoncelli é médica endocrinologista com formação
              diferenciada e olhar integral para a saúde de seus pacientes.
              Fundadora da Pagnoncelli e Silva Consultório Médico desde 2019.
            </p>

            <p className="text-[15px] leading-[1.9] text-[#F4F1EC]/90">
              Sua abordagem combina rigor científico e sensibilidade,
              promovendo tratamentos personalizados e equilibrados.
            </p>

            {/* Quote */}
            <div className="relative mt-2 pl-6">

              <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-[#D8B8B1] via-[#A8B0A3] to-transparent" />

              <p className="italic text-[1rem] md:text-[1.5rem] leading-[1.35] text-[#5A463A]">
                Cada paciente tem uma história única que merece ser ouvida com atenção.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[#7B6E66]/30 to-transparent" />
      </div>
    </section>
  );
}