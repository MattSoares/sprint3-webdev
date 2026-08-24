export default function Home() {
  return (
    <main className="pagina-inicial">
      <section className="apresentacao">
        <span className="etiqueta">SPRINT 3 • WEB DEVELOPMENT</span>

        <h1>
          Modo <span>Estudo</span> Inteligente
        </h1>

        <p>
          Uma central acadêmica simples para cadastrar, organizar e encontrar
          conteúdos de estudo.
        </p>

        <a className="botao-principal" href="#projeto">
          Conhecer o projeto
        </a>
      </section>

      <section className="resumo-projeto" id="projeto">
        <span className="etiqueta">NOSSO PROJETO</span>
        <h2>Feito para ajudar nos estudos</h2>
        <p>
          Durante os próximos commits, esta página receberá componentes,
          cadastro de conteúdos, busca, favoritos, estatísticas e salvamento no
          navegador.
        </p>
      </section>
    </main>
  );
}
