export default function MapaDaSaudeSection() {
  const tsurus = [
    {
      color: "#C94F4F",
      title: "Vermelho",
      description: "Atenção urgente",
    },
    {
      color: "#D08A4E",
      title: "Laranja",
      description: "Zona de alerta",
    },
    {
      color: "#7B6E66",
      title: "Cinza",
      description: "Dentro do esperado",
    },
    {
      color: "#7FA37D",
      title: "Verde",
      description: "Saúde em dia",
    },
    {
      color: "#5E7FA3",
      title: "Azul",
      description: "Resultado excelente",
    },
  ];

  return (
    <section className="w-full bg-[#F8F4F1] py-8 px-6 md:px-10 lg:px-16 text-[#7B6E66] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
        {/* LADO ESQUERDO */}
        <div className="space-y-6">
          {/* TOPO */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* IMAGEM */}
            <div className="shrink-0">
              <img
                src="/origami.png"
                alt="Tsuru Origami"
                className="w-[140px] md:w-[180px] h-auto object-contain drop-shadow-sm"
              />
            </div>

            {/* TÍTULO */}
            <div className="space-y-3 text-center md:text-left">
              <h1
                className="text-5xl md:text-6xl leading-[1.05]"
                style={{
                  fontFamily: "Italiana, serif",
                  color: "#7B6E66",
                }}
              >
                O seu <span className="italic">Tsuru da Saúde</span>
              </h1>

           
            </div>
          </div>

          {/* TEXTOS */}
          <div
            className="space-y-3 text-lg leading-relaxed"
            style={{ fontFamily: "Jost, sans-serif" }}
          >

            <p>
              O Tsuru é uma ave lendária da cultura japonesa, símbolo de
              longevidade, equilíbrio e felicidade plena. Na tradição oriental,
              ele representa cuidado, esperança e recuperação.
            </p>

            <p>
              Cada cor revela um momento da sua jornada de saúde e nos ajuda a
              transformar dados em consciência, prevenção e ação.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 pt-2">
            {tsurus.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl p-3 min-h-[110px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <div>
                  <h3
                    className="text-lg mb-1"
                    style={{
                      fontFamily: "Italiana, serif",
                      color: item.color,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="relative">
          <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-[#D8B8B1]/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#A8B0A3]/30 blur-3xl" />

          <div className="relative rounded-[36px] border border-[#B39B8F]/20 bg-white/70 backdrop-blur-sm p-5 md:p-6 shadow-2xl">
            <div className="space-y-4">
              <div>
                <span
                  className="uppercase tracking-[0.2em] text-sm"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: "#B39B8F",
                  }}
                >
                  O que é o Mapa da Saúde?
                </span>

                <h2
                  className="mt-2 text-4xl leading-tight"
                  style={{
                    fontFamily: "Italiana, serif",
                    color: "#7B6E66",
                  }}
                >
                  Um check-up da vida.
                </h2>
              </div>

             

              <div
                className="space-y-3 text-base md:text-lg leading-relaxed"
                style={{
                  fontFamily: "Jost, sans-serif",
                  color: "#7B6E66",
                }}
              >
                <p>
                  O Mapa da Saúde é um laudo médico detalhado e acessível,
                  criado para que você compreenda não apenas doenças, mas quanta
                  saúde realmente possui.
                </p>

                <p>
                  A avaliação integra estilo de vida, composição corporal, força
                  física e exames laboratoriais convencionais para transformar
                  sua saúde em algo mensurável, compreensível e comparável ao
                  longo do tempo.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3 pt-1">
                <div className="rounded-3xl bg-[#F8F4F1] p-4 border border-[#D8B8B1]/30">
                  <h3
                    className="text-2xl mb-2"
                    style={{
                      fontFamily: "Italiana, serif",
                      color: "#7B6E66",
                    }}
                  >
                    Indicações
                  </h3>

                  <ul
                    className="space-y-1 text-sm leading-relaxed"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    <li>• Check-ups e prevenção</li>
                    <li>• Performance e longevidade</li>
                    <li>• Pré-operatórios e desafios físicos</li>
                    <li>• Acompanhamento de doenças crônicas</li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-[#F8F4F1] p-4 border border-[#A8B0A3]/30">
                  <h3
                    className="text-2xl mb-2"
                    style={{
                      fontFamily: "Italiana, serif",
                      color: "#7B6E66",
                    }}
                  >
                    Benefícios
                  </h3>

                  <ul
                    className="space-y-1 text-sm leading-relaxed"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    <li>• Clareza sobre sua saúde real</li>
                    <li>• Educação e autonomia</li>
                    <li>• Indicadores objetivos ao longo do tempo</li>
                    <li>• Mais precisão nas condutas médicas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}