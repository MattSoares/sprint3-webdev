export default function Hero() {
  return (
    <section className="apresentacao" id="inicio">
      <div className="apresentacao-texto">
        <span className="etiqueta">SPRINT 3 • WEB DEVELOPMENT</span>

        <h1>
          Seu material de estudo, <span>sem bagunça.</span>
        </h1>

        <p>
          Cadastre, encontre e favorite conteúdos acadêmicos em uma central
          simples feita para a rotina de quem estuda.
        </p>

        <div className="acoes-apresentacao">
          <a className="botao-principal" href="#cadastro">
            Adicionar conteúdo
          </a>
          <a className="link-secundario" href="#conteudos">
            Ver materiais →
          </a>
        </div>
      </div>

      <aside className="painel-estudo" aria-label="Exemplo de sessão de estudo">
        <div className="painel-topo">
          <span>Sessão de estudo</span>
          <span className="status-sessao">Em andamento</span>
        </div>

        <div className="painel-disciplina">
          <span className="painel-icone" aria-hidden="true">💻</span>
          <div>
            <small>Disciplina atual</small>
            <strong>Web Development</strong>
          </div>
        </div>

        <div className="painel-progresso">
          <div>
            <span>Progresso da revisão</span>
            <strong>72%</strong>
          </div>
          <div className="barra-progresso">
            <span />
          </div>
        </div>

        <div className="painel-rodape">
          <span>4 conteúdos revisados</span>
          <span>Meta: 6</span>
        </div>
      </aside>
    </section>
  );
}
