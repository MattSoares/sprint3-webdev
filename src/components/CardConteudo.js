export default function CardConteudo({ conteudo }) {
  return (
    <article className="card-conteudo">
      <div className="icone-conteudo" aria-hidden="true">
        {conteudo.icone}
      </div>

      <span className="tipo-conteudo">{conteudo.tipo}</span>

      <h3>{conteudo.titulo}</h3>

      <p>{conteudo.descricao}</p>

      <strong className="disciplina-conteudo">
        {conteudo.disciplina}
      </strong>
    </article>
  );
}