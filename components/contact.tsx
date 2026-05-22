"use client";

import { Instagram, MapPin, Phone, Clock } from "lucide-react";

const colors = {
  nude: "#DDD3CB",
  greige: "#CFC7C0",
  taupeFendi: "#B39B8F",
  brownSoft: "#7B6E66",
  sage: "#A8B0A3",
  blush: "#D8B8B1",
};

export function Contact() {
  return (
    <section
      id="contato"
      className="py-14 px-6 md:px-12 border-t"
      style={{ backgroundColor: colors.nude }}
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div>
            <span
              className="text-[9px] tracking-[0.4em] uppercase"
              style={{ color: colors.brownSoft }}
            >
              04 · Contato
            </span>

            <h2
              className="text-[2.8rem] md:text-[4rem] leading-[0.9]"
              style={{
                fontFamily: "var(--font-italiana, serif)",
                color: colors.brownSoft,
              }}
            >
              Vamos <span style={{ color: colors.taupeFendi }}>conversar</span>
            </h2>
          </div>

          <p
            className="max-w-[38ch] md:text-right leading-[1.7]"
            style={{ color: colors.brownSoft }}
          >
            Entre em contato para agendar sua consulta ou esclarecer dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="space-y-3">

            {/* CTA */}
            <div
              className="rounded-[10px] p-6"
              style={{
                background: `linear-gradient(135deg, ${colors.taupeFendi} 0%, ${colors.brownSoft} 100%)`,
                color: "#F7F3EF",
              }}
            >
              <p className="text-[9px] tracking-[0.4em] uppercase opacity-80 mb-2">
                Agende sua Consulta
              </p>

              <h3 className="text-2xl sm:text-3xl mb-3">
                Pronto para cuidar da sua saúde
              </h3>

              <p className="text-sm italic opacity-90 mb-5 leading-relaxed">
                Agende sua consulta e dê o primeiro passo para uma vida com mais equilíbrio.
              </p>

              <a
                href="https://wa.me/5521972646121"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 text-[10px] uppercase tracking-[0.15em] rounded-[8px] font-medium transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl active:scale-[0.98] hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, #F7F3EF, #E8E1DB)`,
                  color: colors.brownSoft,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                }}
              >
                <Phone className="w-4 h-4" />
                Agendar consulta agora
              </a>
            </div>

            {/* CARDS */}
            {[
              {
                icon: Phone,
                label: "Telefone / WhatsApp",
                value: "+55 21 97264-6121",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@draarianepagnoncelli",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 px-4 py-3 rounded-[6px]"
                style={{ backgroundColor: "#F7F3EF" }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-[4px]"
                  style={{ backgroundColor: `${colors.blush}55` }}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-sm" style={{ color: colors.brownSoft }}>
                    {label}
                  </p>
                  <p style={{ color: colors.brownSoft }}>{value}</p>
                </div>
              </div>
            ))}

            {/* HOURS */}
            <div
              className="flex gap-4 px-4 py-3 rounded-[6px]"
              style={{ backgroundColor: "#F7F3EF" }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-[4px]"
                style={{ backgroundColor: `${colors.sage}55` }}
              >
                <Clock className="w-4 h-4" />
              </div>

              <p className="text-sm leading-relaxed" style={{ color: colors.brownSoft }}>
                Segunda a Sexta: 08h às 18h
                <br />
                Sábado: 08h às 12h
                <br />
                Domingo: Fechado
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-3">

            {/* ADDRESS */}
            <div
              className="flex gap-4 px-4 py-3 rounded-[6px]"
              style={{ backgroundColor: "#F7F3EF" }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-[4px]"
                style={{ backgroundColor: `${colors.blush}55` }}
              >
                <MapPin className="w-4 h-4" />
              </div>

              <div>
                <p className="text-sm" style={{ color: colors.brownSoft }}>
                  Endereço
                </p>

                <p style={{ color: colors.brownSoft }}>Clínica Médica</p>

                <p className="text-sm" style={{ color: colors.brownSoft }}>
                  Rua Senador Dantas, 20 — Centro
                  <br />
                  Rio de Janeiro / RJ
                </p>
              </div>
            </div>

            {/* MAP */}
            <div
              className="rounded-[6px] overflow-hidden"
              style={{ height: 300 }}
            >
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Rua+Senador+Dantas,+20,+Rio+de+Janeiro&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* BUTTON */}
            <div className="flex justify-center pt-2">
              <a
                href="https://www.google.com/maps?q=Rua+Senador+Dantas,+20,+Rio+de+Janeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[10px] uppercase tracking-[0.18em] rounded-[8px] font-medium transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${colors.taupeFendi}, ${colors.brownSoft})`,
                  color: "#F7F3EF",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              >
                <MapPin className="w-4 h-4" />
                Ver rota no mapa
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}