import { FaArrowUp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-conteudo">
        <p>
          © {new Date().getFullYear()} Gustavo Ciriaco. Todos os direitos
          reservados.
        </p>

        <a href="#inicio" className="btn-topo" aria-label="Voltar ao topo">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}
