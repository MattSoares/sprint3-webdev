"use client";

import { useState } from "react";

const iconesPorTipo = {
  Resumo: "📚",
  Anotação: "📝",
  Exercício: "✅",
  Fórmula: "📐",
  "Mapa mental": "🗺️",
};

export default function FormularioConteudo({
  onAdicionar,
  conteudoEmEdicao,
  onSalvarEdicao,
  onCancelarEdicao,
}) {
  const [titulo, setTitulo] = useState(conteudoEmEdicao?.titulo ?? "");
  const [disciplina, setDisciplina] = useState(
    conteudoEmEdicao?.disciplina ?? "",
  );
  const [tipo, setTipo] = useState(conteudoEmEdicao?.tipo ?? "Resumo");
  const [descricao, setDescricao] = useState(
    conteudoEmEdicao?.descricao ?? "",
  );

  function enviarFormulario(evento) {
    evento.preventDefault();

    if (!titulo.trim() || !disciplina.trim() || !descricao.trim()) {
      return;
    }

    const dadosConteudo = {
      titulo: titulo.trim(),
      disciplina: disciplina.trim(),
      tipo,
      descricao: descricao.trim(),
      icone: iconesPorTipo[tipo],
    };

    if (conteudoEmEdicao) {
      onSalvarEdicao({
        ...conteudoEmEdicao,
        ...dadosConteudo,
      });
    } else {
      onAdicionar({
        id: Math.floor(Math.random() * 1000000),
        ...dadosConteudo,
        favorito: false,
      });
    }

    setTitulo("");
    setDisciplina("");
    setTipo("Resumo");
    setDescricao("");
  }

  return (
    <section className="secao-formulario" id="cadastro">
      <div className="titulo-secao">
        <span className="etiqueta">
          {conteudoEmEdicao ? "EDITAR CONTEÚDO" : "NOVO CONTEÚDO"}
        </span>
        <h2>
          {conteudoEmEdicao
            ? "Atualizar material de estudo"
            : "Adicionar material de estudo"}
        </h2>
        <p>
          {conteudoEmEdicao
            ? "Altere os campos e salve as novas informações."
            : "Preencha os campos para adicionar um conteúdo à sua lista."}
        </p>
      </div>

      <form className="formulario-conteudo" onSubmit={enviarFormulario}>
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

        <div className="acoes-formulario">
          <button className="botao-principal botao-formulario" type="submit">
            {conteudoEmEdicao ? "Salvar alterações" : "Adicionar conteúdo"}
          </button>

          {conteudoEmEdicao && (
            <button
              className="botao-secundario"
              type="button"
              onClick={onCancelarEdicao}
            >
              Cancelar edição
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
