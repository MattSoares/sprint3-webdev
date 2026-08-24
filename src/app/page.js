import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ListaConteudos from "@/components/ListaConteudos";
import conteudosIniciais from "@/data/conteudosIniciais";

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
            Organize anotações, resumos e materiais acadêmicos em uma interface
            simples e fácil de utilizar.
          </p>
        </section>

        <ListaConteudos conteudos={conteudosIniciais} />
      </main>

      <Footer />
    </>
  );
}