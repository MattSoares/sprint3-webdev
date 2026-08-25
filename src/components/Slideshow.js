"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    icone: "📐",
    tipo: "Anotação",
    titulo: "Anotações de Cálculo",
    descricao: "Limites, derivadas e exercícios reunidos para uma revisão rápida.",
  },
  {
    icone: "🧬",
    tipo: "Resumo",
    titulo: "Resumo de Biologia",
    descricao: "Conceitos de células e genética organizados em um único material.",
  },
  {
    icone: "⚡",
    tipo: "Fórmula",
    titulo: "Fórmulas de Física",
    descricao: "Velocidade, força e energia prontas para consultar antes da prova.",
  },
];

export default function Slideshow() {
  const [slideAtual, setSlideAtual] = useState(0);
  const [reproducaoAutomatica, setReproducaoAutomatica] = useState(true);

  useEffect(() => {
    if (!reproducaoAutomatica) {
      return undefined;
    }

    const intervalo = setInterval(() => {
      setSlideAtual((atual) => (atual + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [reproducaoAutomatica]);

  function mostrarAnterior() {
    setSlideAtual((atual) => (atual - 1 + slides.length) % slides.length);
  }

  function mostrarProximo() {
    setSlideAtual((atual) => (atual + 1) % slides.length);
  }

  const slide = slides[slideAtual];

  return (
    <section className="secao-slideshow" id="destaques">
      <div className="titulo-secao">
        <span className="etiqueta">DESTAQUES</span>
        <h2>Conteúdos para revisar</h2>
        <p>Uma seleção de materiais acadêmicos disponíveis na plataforma.</p>
      </div>

      <div className="slideshow" aria-live="polite">
        <div className="slideshow-conteudo">
          <span className="slideshow-icone" aria-hidden="true">
            {slide.icone}
          </span>

          <div>
            <span className="slideshow-tipo">{slide.tipo}</span>
            <h3>{slide.titulo}</h3>
            <p>{slide.descricao}</p>
          </div>
        </div>

        <div className="controles-slideshow">
          <button type="button" onClick={mostrarAnterior}>
            ← Anterior
          </button>

          <button
            type="button"
            onClick={() => setReproducaoAutomatica((valor) => !valor)}
          >
            {reproducaoAutomatica ? "Pausar" : "Reproduzir"}
          </button>

          <button type="button" onClick={mostrarProximo}>
            Próximo →
          </button>
        </div>

        <div className="indicadores-slideshow" aria-label="Selecionar destaque">
          {slides.map((item, indice) => (
            <button
              key={item.titulo}
              className={indice === slideAtual ? "indicador-ativo" : ""}
              type="button"
              aria-label={`Mostrar ${item.titulo}`}
              onClick={() => setSlideAtual(indice)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
