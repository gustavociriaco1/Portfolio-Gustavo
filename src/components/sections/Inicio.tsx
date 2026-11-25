import {
  FaArrowRight,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import fotoPerfil from "../../assets/foto-sem-fundo.png";

export function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="container inicio-grid">
        <div className="inicio-texto">
          <span className="badge-ola">Olá, eu sou</span>

          <h1>
            Gustavo
            <span className="texto-gradiente">Ciriaco</span>
          </h1>

          <p className="subtitulo">Desenvolvedor Full Stack |</p>

          <p className="bio">
            Desenvolvedor focado em criar aplicações web modernas, responsivas e
            performáticas utilizando React, TypeScript e Python.
          </p>

          <div className="acoes">
            <a href="projetos" className="btn-primario">
              Ver Projetos <FaArrowRight />
            </a>
            <a href="contato" className="btn-secundario">
              Entrar em Contato <FaPaperPlane />
            </a>
          </div>

          <div className="redes">
            <a
              href="https://github.com/gustavociriaco1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-ciriaco"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:gustavociriaco5@hotmail.com" aria-label="E-mail">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="inicio-foto-wrapper">
          <div className="foto-aura" />
          <div className="foto-dots" />

          <div className="icone-flutuante">
            <FaCode />
          </div>

          <img
            src={fotoPerfil}
            alt="Gustavo Ciriaco - Desenvolvedor Full Stack"
            className="foto-perfil"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
