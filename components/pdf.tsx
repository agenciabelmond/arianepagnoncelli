"use client";

import { useState } from "react";

export default function DownloadSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzmOZK0jHgpZmNTnDVG8EQGGhukbxBv0VLwL7T83zYsgjiuJI4fv2BLgBFaD4ZgjyD2BQ/exec";

  // VALIDAÇÃO EMAIL
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    // VALIDA CAMPOS
    if (!name || !email) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // VALIDA EMAIL
    if (!validateEmail(email)) {
      setError("Digite um endereço de e-mail válido.");
      return;
    }

    try {
      setLoading(true);

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
        }),
      });

      setDone(true);

      // DOWNLOAD AUTOMÁTICO
      const link = document.createElement("a");
      link.href = "/Petrópolis.pdf";
      link.download = "Petrópolis.pdf";
      link.click();

    } catch (error) {
      console.error(error);

      setError(
        "Ocorreu um erro ao enviar seus dados. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        w-full
        py-24
        px-6
        flex
        justify-center
        items-center
      "
      style={{
        background:
          "linear-gradient(180deg, #F6F2EE 0%, #EFE7E1 100%)",
      }}
    >
      <div
        className="
          w-full
          max-w-6xl
          grid
          md:grid-cols-2
          overflow-hidden
          rounded-[32px]
          shadow-2xl
        "
        style={{
          backgroundColor: "#F8F5F2",
        }}
      >
        {/* ESQUERDA */}
        <div
          className="
            p-10
            md:p-16
            flex
            flex-col
            justify-center
          "
          style={{
            backgroundColor: "#CFC7C0",
          }}
        >
         <p
  className="
    uppercase
    tracking-[0.35em]
    text-sm
    mb-5
  "
  style={{
    color: "#7B6E66",
    fontFamily: "Jost, sans-serif",
  }}
>
  Material Exclusivo
</p>

<h2
  className="
    text-5xl
    leading-tight
    mb-6
  "
  style={{
    color: "#4E433D",
    fontFamily: "Cinzel, serif",
    fontWeight: 400,
  }}
>
  Guia Mounjaro
</h2>

<p
  className="
    text-lg
    leading-8
    max-w-md
  "
  style={{
    color: "#5E544E",
    fontFamily: "Jost, sans-serif",
    fontWeight: 300,
  }}
>
  Um caminho de cuidado, leveza e bem-estar.
  Receba gratuitamente o guia completo com
  orientações práticas para acompanhar seu
  tratamento com mais segurança e confiança.
</p>
          <div
            className="mt-10 h-px w-24"
            style={{
              backgroundColor: "#7B6E66",
            }}
          />
        </div>

        {/* DIREITA */}
        <div
          className="
            p-10
            md:p-16
            flex
            flex-col
            justify-center
          "
          style={{
            backgroundColor: "#F8F5F2",
          }}
        >
          {!done ? (
            <>
              <h3
                className="text-4xl mb-3"
                style={{
                  color: "#4E433D",
                  fontFamily: "Cormorant Garamond, serif",
                  fontStyle: "italic",
                }}
              >
                Receba o eBook
              </h3>

              <p
                className="mb-8 text-base leading-7"
                style={{
                  color: "#7B6E66",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Preencha seus dados para acessar o download.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* INPUT NOME */}
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="
                      w-full
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      transition-all
                      duration-300
                      focus:scale-[1.01]
                    "
                    style={{
                      border: "1px solid #D8B8B1",
                      backgroundColor: "#FFFFFF",
                      color: "#4E433D",
                      fontFamily: "Jost, sans-serif",
                    }}
                  />
                </div>

                {/* INPUT EMAIL */}
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="
                      w-full
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      transition-all
                      duration-300
                      focus:scale-[1.01]
                    "
                    style={{
                      border: "1px solid #D8B8B1",
                      backgroundColor: "#FFFFFF",
                      color: "#4E433D",
                      fontFamily: "Jost, sans-serif",
                    }}
                  />
                </div>

                {/* ERRO */}
                {error && (
                  <div
                    className="
                      rounded-2xl
                      px-5
                      py-4
                      text-sm
                      animate-in
                      fade-in
                      duration-300
                    "
                    style={{
                      backgroundColor: "#D8B8B1",
                      color: "#5E433B",
                      fontFamily: "Jost, sans-serif",
                    }}
                  >
                    {error}
                  </div>
                )}

                {/* BOTÃO */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    rounded-2xl
                    py-4
                    mt-2
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    disabled:opacity-70
                  "
                  style={{
                    backgroundColor: "#7B6E66",
                    color: "#F8F5F2",
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                  }}
                >
                  {loading
                    ? "ENVIANDO..."
                    : "LIBERAR DOWNLOAD"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h3
                className="text-4xl mb-4"
                style={{
                  color: "#4E433D",
                  fontFamily: "Cormorant Garamond, serif",
                  fontStyle: "italic",
                }}
              >
                Download liberado
              </h3>

              <p
                className="text-lg leading-8"
                style={{
                  color: "#7B6E66",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Obrigado pelo seu interesse.
                Seu material foi baixado com sucesso.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}