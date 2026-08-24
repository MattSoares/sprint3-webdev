import Footer from "@/components/Footer";
import GerenciadorConteudos from "@/components/GerenciadorConteudos";
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
            Organize anotações, resumos e materiais acadêmicos em uma interface
            simples e fácil de utilizar.
          </p>
        </section>

        <GerenciadorConteudos />
      </main>

      <Footer />
    </>
  );
}