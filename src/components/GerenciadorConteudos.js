"use client";

import { useEffect, useState } from "react";
import Estatisticas from "@/components/Estatisticas";
import FormularioConteudo from "@/components/FormularioConteudo";
import ListaConteudos from "@/components/ListaConteudos";
import conteudosIniciais from "@/data/conteudosIniciais";

const CHAVE_LOCAL_STORAGE = "modoEstudoConteudos";

export default function GerenciadorConteudos() {
  const [conteudos, setConteudos] = useState(conteudosIniciais);
  const [busca, setBusca] = useState("");
  const [dadosCarregados, setDadosCarregados] = useState(false);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      const dadosSalvos = localStorage.getItem(CHAVE_LOCAL_STORAGE);

      if (dadosSalvos) {
        try {
          const conteudosSalvos = JSON.parse(dadosSalvos);
          setConteudos(conteudosSalvos);
        } catch {
          localStorage.removeItem(CHAVE_LOCAL_STORAGE);
        }
      }

      setDadosCarregados(true);
    }, 0);

    return () => clearTimeout(temporizador);
  }, []);

  useEffect(() => {
    if (dadosCarregados) {
      localStorage.setItem(
        CHAVE_LOCAL_STORAGE,
        JSON.stringify(conteudos),
      );
    }
  }, [conteudos, dadosCarregados]);

  function adicionarConteudo(novoConteudo) {
    setConteudos((conteudosAtuais) => [
      novoConteudo,
      ...conteudosAtuais,
    ]);
  }

  function favoritarConteudo(id) {
    setConteudos((conteudosAtuais) =>
      conteudosAtuais.map((conteudo) => {
        if (conteudo.id === id) {
          return {
            ...conteudo,
            favorito: !conteudo.favorito,
          };
        }

        return conteudo;
      }),
    );
  }

  function excluirConteudo(id) {
    setConteudos((conteudosAtuais) =>
      conteudosAtuais.filter((conteudo) => conteudo.id !== id),
    );
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
      <Estatisticas conteudos={conteudos} />

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

        <div className="informacoes-busca">
          <span>
            {conteudosFiltrados.length} conteúdo(s) encontrado(s)
          </span>

          <span className="aviso-salvamento">
            Dados salvos neste navegador
          </span>
        </div>
      </section>

      <ListaConteudos
        conteudos={conteudosFiltrados}
        onFavoritar={favoritarConteudo}
        onExcluir={excluirConteudo}
      />
    </>
  );
}
