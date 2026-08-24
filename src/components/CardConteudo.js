export default function CardConteudo({
  conteudo,
  onFavoritar,
  onExcluir,
}) {
  return (
    <article
      className={`card-conteudo ${conteudo.favorito ? "card-favorito" : ""}`}
    >
      <div className="topo-card">
        <div className="icone-conteudo" aria-hidden="true">
          {conteudo.icone}
        </div>

        {conteudo.favorito && (
          <span className="indicador-favorito">Favorito</span>
        )}
      </div>

      <span className="tipo-conteudo">{conteudo.tipo}</span>

      <h3>{conteudo.titulo}</h3>

      <p>{conteudo.descricao}</p>

      <strong className="disciplina-conteudo">
        {conteudo.disciplina}
      </strong>

      <div className="acoes-card">
        <button
          className={`botao-card botao-favorito ${
            conteudo.favorito ? "favorito-ativo" : ""
          }`}
          type="button"
          onClick={() => onFavoritar(conteudo.id)}
        >
          {conteudo.favorito ? "★ Remover favorito" : "☆ Favoritar"}
        </button>

        <button
          className="botao-card botao-excluir"
          type="button"
          onClick={() => onExcluir(conteudo.id)}
        >
          Excluir
        </button>
      </div>
    </article>
  );
}