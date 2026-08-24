"use client";

import { useState } from "react";
import FormularioConteudo from "@/components/FormularioConteudo";
import ListaConteudos from "@/components/ListaConteudos";
import conteudosIniciais from "@/data/conteudosIniciais";

export default function GerenciadorConteudos() {
  const [conteudos, setConteudos] = useState(conteudosIniciais);
  const [busca, setBusca] = useState("");

  function adicionarConteudo(novoConteudo) {
    setConteudos((conteudosAtuais) => [
      novoConteudo,
      ...conteudosAtuais,
    ]);
  }

  const conteudosFiltrados = conteudos.filter((conteudo) => {
    const textoBuscado = busca.toLowerCase();

    return (
      conteudo.titulo.toLowerCase().includes(textoBuscado) ||
      conteudo.disciplina.toLowerCase().includes(textoBuscado)
    );
  });

  return (
    <>
      <FormularioConteudo onAdicionar={adicionarConteudo} />

      <section className="secao-busca">
        <label htmlFor="busca">Buscar conteúdo</label>

        <input
          id="busca"
          type="search"
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
          placeholder="Digite um título ou disciplina"
        />

        <span>
          {conteudosFiltrados.length} conteúdo(s) encontrado(s)
        </span>
      </section>

      <ListaConteudos conteudos={conteudosFiltrados} />
    </>
  );
}