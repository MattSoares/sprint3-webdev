"use client";

import { useState } from "react";

export default function FormularioConteudo({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [tipo, setTipo] = useState("Resumo");
  const [descricao, setDescricao] = useState("");

  function adicionarConteudo(evento) {
    evento.preventDefault();

    if (!titulo.trim() || !disciplina.trim() || !descricao.trim()) {
      return;
    }

    const novoConteudo = {
      id: Math.floor(Math.random() * 1000000),
      titulo: titulo.trim(),
      disciplina: disciplina.trim(),
      tipo,
      descricao: descricao.trim(),
      icone: "📚",
    };

    onAdicionar(novoConteudo);

    setTitulo("");
    setDisciplina("");
    setTipo("Resumo");
    setDescricao("");
  }

  return (
    <section className="secao-formulario" id="cadastro">
      <div className="titulo-secao">
        <span className="etiqueta">NOVO CONTEÚDO</span>
        <h2>Adicionar material de estudo</h2>
        <p>Preencha os campos para adicionar um conteúdo à sua lista.</p>
      </div>

      <form className="formulario-conteudo" onSubmit={adicionarConteudo}>
        <div className="campo-formulario">
          <label htmlFor="titulo">Título</label>

          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            placeholder="Ex.: Exercícios de programação"
            required
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="disciplina">Disciplina</label>

          <input
            id="disciplina"
            type="text"
            value={disciplina}
            onChange={(evento) => setDisciplina(evento.target.value)}
            placeholder="Ex.: Web Development"
            required
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="tipo">Tipo</label>

          <select
            id="tipo"
            value={tipo}
            onChange={(evento) => setTipo(evento.target.value)}
          >
            <option value="Resumo">Resumo</option>
            <option value="Anotação">Anotação</option>
            <option value="Exercício">Exercício</option>
            <option value="Fórmula">Fórmula</option>
            <option value="Mapa mental">Mapa mental</option>
          </select>
        </div>

        <div className="campo-formulario campo-descricao">
          <label htmlFor="descricao">Descrição</label>

          <textarea
            id="descricao"
            value={descricao}
            onChange={(evento) => setDescricao(evento.target.value)}
            placeholder="Escreva uma pequena descrição."
            rows="4"
            required
          />
        </div>

        <button className="botao-principal botao-formulario" type="submit">
          Adicionar conteúdo
        </button>
      </form>
    </section>
  );
}