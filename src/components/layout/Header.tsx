import { FaDownload } from "react-icons/fa";

export function Header() {
  return (
    <header className="header">
      <div className="container header-conteudo">
        <a href="#inicio" className="logo">
          G
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>

        <a
          href="/curriculo-gustavo-ciriaco.pdf"
          download="Curriculo-Gustavo-Ciriaco.pdf"
          className="btn-cv"
        >
          <FaDownload /> Baixar CV
        </a>
      </div>
    </header>
  );
}
