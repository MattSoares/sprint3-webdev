export default function Estatisticas({ conteudos }) {
  const totalConteudos = conteudos.length;
  const totalFavoritos = conteudos.filter(
    (conteudo) => conteudo.favorito,
  ).length;

  const porcentagemFavoritos =
    totalConteudos === 0
      ? 0
      : Math.round((totalFavoritos / totalConteudos) * 100);

  return (
    <section className="secao-estatisticas" aria-labelledby="titulo-estatisticas">
      <div className="titulo-secao">
        <span className="etiqueta">ESTATÍSTICAS</span>
        <h2 id="titulo-estatisticas">Resumo dos seus estudos</h2>
        <p>Veja uma visão rápida dos conteúdos cadastrados.</p>
      </div>

      <div className="grade-estatisticas">
        <article className="card-estatistica">
          <strong>{totalConteudos}</strong>
          <span>Conteúdos cadastrados</span>
        </article>

        <article className="card-estatistica">
          <strong>{totalFavoritos}</strong>
          <span>Conteúdos favoritos</span>
        </article>

        <article className="card-estatistica">
          <strong>{porcentagemFavoritos}%</strong>
          <span>Porcentagem de favoritos</span>
        </article>
      </div>
    </section>
  );
}
