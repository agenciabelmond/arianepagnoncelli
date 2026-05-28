"use client";

import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const colors = {
  nude: "#DDD3CB",
  greige: "#CFC7C0",
  taupeFendi: "#B39B8F",
  brownSoft: "#7B6E66",
  sage: "#A8B0A3",
  blush: "#D8B8B1",
};

const faqData: FAQItem[] = [
  {
    question: "Reposição hormonal causa câncer de mama?",
    answer:
      "A resposta curta é: não, na maioria das mulheres saudáveis que iniciam a reposição na janela correta (até 10 anos após a última menstruação ou antes dos 60). O risco que assustou o mundo em 2002 foi superestimado e revisto. Hoje, sociedades médicas como a International Menopause Society recomendam a reposição como tratamento de primeira linha para sintomas desde que individualizada. A pergunta certa não é \"se\", é \"para quem, quando, qual e como\".",
  },
  {
    question: "Por que estou ganhando peso na perimenopausa mesmo comendo igual?",
    answer:
      "Porque o seu corpo não está mais o mesmo. A queda gradual do estrogênio altera a forma como você estoca gordura (mais abdominal), reduz massa muscular e diminui o gasto energético em repouso. Comer \"igual\" hoje, em termos metabólicos, é comer mais. Não é falta de força de vontade é fisiologia. E tem tratamento.",
  },
  {
    question: "Tireoidite de Hashimoto tem cura?",
    answer:
      "Não tem cura, mas tem controle excelente. Tireoidite de Hashimoto é uma tireoidite autoimune crônica — o sistema imune produz anticorpos contra a tireoide. O que se trata é a consequência (hipotireoidismo, quando se instala) com reposição de hormônio tireoidiano. Dieta sem glúten ou suplementos não curam Hashimoto, mas hábitos saudáveis melhoram qualidade de vida. Diagnóstico precoce muda o jogo.",
  },
  {
    question: "Posso usar Ozempic (ou similar) sem ter diabetes?",
    answer:
      "Para tratamento da obesidade, sim. Análogos de GLP-1 e GIP/GLP-1 já têm aprovação da Anvisa para esse uso. Mas \"posso\" não é o mesmo que \"devo\". É medicação de prescrição médica, com indicações, contraindicações e efeitos colaterais reais. Não é solução estética, não é solução para \"perder 3 quilos\". É tratamento clínico de obesidade e precisa de acompanhamento.",
  },
  {
    question: "Vou ficar dependente de insulina se eu tiver diabetes tipo 2?",
    answer:
      "Depende do estágio do diagnóstico, do controle ao longo do tempo e de fatores individuais. Diabetes tipo 2 tem hoje um arsenal terapêutico que era impensável há dez anos (metformina, análogos de GLP-1, inibidores de SGLT-2) que adiam ou evitam a insulina em muitas pacientes. Quanto mais cedo se trata bem, menos provável é precisar. Diagnóstico não é sentença.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-8 px-4 md:px-8 border-t"
      style={{ backgroundColor: colors.nude }}
    >
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-6">
          <span
            className="text-[9px] tracking-[0.3em] uppercase"
            style={{ color: colors.brownSoft }}
          >
            05 · FAQ
          </span>

          <h2
            className="text-[2.1rem] md:text-[2.8rem] leading-[1] mt-2"
            style={{
              fontFamily: "var(--font-italiana, serif)",
              color: colors.brownSoft,
            }}
          >
            Dúvidas <span style={{ color: colors.taupeFendi }}>frequentes</span>
          </h2>
        </div>

        {/* ACCORDION */}
        <div className="space-y-2">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-[10px] overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: "#F7F3EF",
                  boxShadow: isOpen
                    ? "0 14px 30px rgba(0,0,0,0.08)"
                    : "0 4px 12px rgba(0,0,0,0.04)",
                }}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                >
                  <span
                    className="text-[14px] md:text-[15px] font-medium leading-snug"
                    style={{ color: colors.brownSoft }}
                  >
                    {item.question}
                  </span>

                  <span
                    className="text-lg transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      color: colors.taupeFendi,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className="px-4 overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "600px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? "12px" : "0px",
                    pointerEvents: isOpen ? "auto" : "none",
                  }}
                >
                  <p
                    className="text-[13px] md:text-[14px] leading-relaxed"
                    style={{ color: colors.brownSoft }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}