export default function Header() {
  return (
    <header className="cabecalho">
      <nav className="navegacao" aria-label="Navegação principal">
        <a className="logo" href="#inicio">
          Modo<span>Estudo</span>
        </a>

        <ul className="links-navegacao">
          <li>
            <a href="#inicio">Início</a>
          </li>

          <li className="link-opcional">
            <a href="#destaques">Destaques</a>
          </li>

          <li>
            <a href="#cadastro">Adicionar</a>
          </li>

          <li>
            <a href="#conteudos">Conteúdos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
