"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Cta() {
  return (
    <section
      id="cta"
      className="relative py-24 bg-[#B39B8F] overflow-hidden"
    >
      {/* Ambient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B6E66]/70 via-transparent to-[#A8B0A3]/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,110,102,0.18),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Label */}
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#1C1714] font-[300] font-[Jost]">
            Atendimento personalizado
          </span>

          {/* Title */}
          <h2
            className="mt-5 text-4xl md:text-6xl text-white leading-[1.1]"
            style={{ fontFamily: "Italiana, serif" }}
          >
            Equilíbrio hormonal com
            <span className="block text-[#F5F1EE]">
              cuidado sofisticado
            </span>
          </h2>

          {/* Description */}
          <p
            className="mt-6 text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-[300]"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Acompanhamento em endocrinologia com abordagem moderna,
            acolhedora e focada na sua saúde integral, bem-estar e qualidade
            de vida em cada etapa do tratamento.
          </p>

          {/* Button */}
          <div className="mt-10">
            <Button
              size="lg"
              className="
                relative rounded-full px-10 py-6 text-sm font-[400]
                bg-[#5f544d] text-white
                hover:bg-[#5f544d]
                transition-all duration-300
                shadow-[0_12px_30px_rgba(123,110,102,0.28)]
                group overflow-hidden
                font-[Jost]
              "
              onClick={() =>
                window.open(
                  "https://wa.me/+555521972646121?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!",
                  "_blank"
                )
              }
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />

              <span className="relative flex items-center gap-2">
                Agendar consulta
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-white" />
              </span>
            </Button>
          </div>

          {/* Bottom info */}
          
        </motion.div>
      </div>
    </section>
  );
}