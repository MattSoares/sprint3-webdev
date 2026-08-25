import CardConteudo from "@/components/CardConteudo";

export default function ListaConteudos({
  conteudos,
  onEditar,
  onFavoritar,
  onExcluir,
}) {
  return (
    <section className="secao-conteudos" id="conteudos">
      <div className="titulo-secao">
        <span className="etiqueta">CONTEÚDOS</span>
        <h2>Materiais para estudar</h2>

        <p>
          Consulte anotações, resumos e outros materiais organizados por
          disciplina.
        </p>
      </div>

      {conteudos.length === 0 ? (
        <p className="mensagem-vazia">
          Nenhum conteúdo encontrado.
        </p>
      ) : (
        <div className="grade-conteudos">
          {conteudos.map((conteudo) => (
            <CardConteudo
              key={conteudo.id}
              conteudo={conteudo}
              onEditar={onEditar}
              onFavoritar={onFavoritar}
              onExcluir={onExcluir}
            />
          ))}
        </div>
      )}
    </section>
  );
}
