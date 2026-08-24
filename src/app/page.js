import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pagina-inicial">
        <Hero />

        <section className="resumo-projeto" id="projeto">
          <span className="etiqueta">NOSSO PROJETO</span>
          <h2>Feito para ajudar nos estudos</h2>
          <p>
            Durante os próximos commits, esta página receberá cadastro de
            conteúdos, busca, favoritos, estatísticas e salvamento no navegador.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
