import Link from "next/link";
import {
  Instagram,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const colors = {
  nude: "#DDD3CB",
  taupeFendi: "#B39B8F",
  brownSoft: "#5F524C",
  sage: "#A8B0A3",
  blush: "#D8B8B1",
};

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ backgroundColor: colors.nude }}
    >
      {/* ambient */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border"
          style={{ borderColor: `${colors.taupeFendi}25` }}
        />

        <div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full border"
          style={{ borderColor: `${colors.sage}25` }}
        />
      </div>

      {/* top line */}
      <div
        className="relative h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(95,82,76,0.25), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">

        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* BRAND */}
          <div className="md:col-span-4">

            <div className="mb-8">
              <p
                className="font-[var(--font-cinzel)] tracking-[0.15em]"
                style={{ color: colors.brownSoft }}
              >
                DRA. ARIANE
              </p>

              <p
                className="font-[var(--font-cinzel)] tracking-[0.15em]"
                style={{ color: colors.brownSoft }}
              >
                PAGNONCELLI
              </p>

              <p
                className="text-[8px] tracking-[0.35em] uppercase mt-1"
                style={{ color: "rgba(95,82,76,0.7)" }}
              >
                Endocrinologista
              </p>

              {/* CRM + RQE */}
              <p
                className="mt-3 text-[12px] tracking-[0.18em] uppercase"
                style={{
                  color: "rgba(95,82,76,0.78)",
                  fontFamily: "var(--font-jost)",
                }}
              >
                CRM-RJ 108.910-2 · RQE 30.309
              </p>
            </div>

            <p
              className="font-[var(--font-cormorant)] text-lg leading-relaxed mb-8 max-w-xs"
              style={{ color: "rgba(95,82,76,0.85)" }}
            >
              Cuidando da sua saúde hormonal com ciência e atenção.
            </p>

            {/* Instagram */}
            <a
              href="https://instagram.com/draarianepagnoncelli"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border px-6 py-4 transition hover:scale-[1.02]"
              style={{
                borderColor: `${colors.taupeFendi}30`,
                backgroundColor: `${colors.taupeFendi}10`,
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.blush}40` }}
              >
                <Instagram
                  className="w-5 h-5"
                  style={{ color: colors.brownSoft }}
                />
              </div>

              <div>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase"
                  style={{ color: "rgba(95,82,76,0.65)" }}
                >
                  Instagram Oficial
                </p>

                <p style={{ color: colors.brownSoft }}>
                  @draarianepagnoncelli
                </p>
              </div>
            </a>
          </div>

          {/* NAV */}
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: "rgba(95,82,76,0.65)" }}
            >
              Navegação
            </p>

            <nav className="flex flex-col gap-1">
              {[
                { href: "#sobre", label: "Sobre" },
                { href: "#especialidades", label: "Especialidades" },
                { href: "#diferenciais", label: "Diferenciais" },
                { href: "#contato", label: "Contato" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex justify-between py-2 border-b transition"
                  style={{ borderColor: `${colors.brownSoft}20` }}
                >
                  <span
                    style={{ color: "rgba(95,82,76,0.8)" }}
                  >
                    {item.label}
                  </span>

                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition"
                    style={{ color: colors.taupeFendi }}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-5">
            <p
              className="text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: "rgba(95,82,76,0.65)" }}
            >
              Contato & Localização
            </p>

            <div className="space-y-5">

              {/* PHONE */}
              <a
                href="tel:(21)972646121"
                className="flex gap-4 p-4 border"
                style={{
                  borderColor: `${colors.taupeFendi}25`,
                  backgroundColor: "#F7F3EF",
                }}
              >
                <Phone
                  className="w-4 h-4"
                  style={{ color: colors.taupeFendi }}
                />

                <div>
                  <p
                    className="text-xs uppercase"
                    style={{ color: "rgba(95,82,76,0.6)" }}
                  >
                    WhatsApp
                  </p>

                  <p style={{ color: colors.brownSoft }}>
                    (21) 97264-6121
                  </p>
                </div>
              </a>

              {/* HOURS */}
              <div
                className="flex gap-4 p-4 border"
                style={{
                  borderColor: `${colors.taupeFendi}25`,
                  backgroundColor: "#F7F3EF",
                }}
              >
                <Clock
                  className="w-4 h-4"
                  style={{ color: colors.sage }}
                />

                <div
                  style={{ color: colors.brownSoft }}
                  className="text-sm leading-relaxed"
                >
                  <p>Segunda a Sexta: 08h às 18h</p>
                  <p>Sábado: 08h às 12h</p>
                </div>
              </div>

              {/* ADDRESS */}
              <div
                className="flex gap-4 p-4 border"
                style={{
                  borderColor: `${colors.taupeFendi}25`,
                  backgroundColor: "#F7F3EF",
                }}
              >
                <MapPin
                  className="w-4 h-4"
                  style={{ color: colors.blush }}
                />

                <div className="text-sm">
                  <p style={{ color: colors.brownSoft }}>
                    Clínica Médica
                  </p>

                  <p style={{ color: "rgba(95,82,76,0.75)" }}>
                    Rua Senador Dantas, 20 — Centro
                  </p>

                  <p style={{ color: "rgba(95,82,76,0.75)" }}>
                    Rio de Janeiro / RJ
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* bottom */}
        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderColor: `${colors.taupeFendi}25`,
            color: "rgba(95,82,76,0.65)",
          }}
        >
          <p className="text-[13px]">
            © 2026 Dra. Ariane Pagnoncelli
          </p>

          <p
            className="uppercase tracking-[0.14em] text-[15px]"
            style={{
              fontFamily: "var(--font-jost)",
            }}
          >
            CRM-RJ 108.910-2 · RQE 30.309
          </p>
        </div>

      </div>
    </footer>
  );
}