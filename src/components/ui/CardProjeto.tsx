import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Projeto } from "../../types/portfolio";

interface CardProjetoProps {
  projeto: Projeto;
}

export function CardProjeto({ projeto }: CardProjetoProps) {
  return (
    <article className="card-projeto">
      <div className="card-thumb">
        <img src={projeto.imagem} alt={projeto.titulo} loading="lazy" />
      </div>

      <div className="card-body">
        <h3>{projeto.titulo}</h3>
        <p>{projeto.descricao}</p>

        <div className="card-tags">
          {projeto.tecnologias.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="card-acoes">
          {projeto.githubUrl && (
            <a
              href={projeto.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Código no GitHub de ${projeto.titulo}`}
            >
              <FaGithub />
            </a>
          )}
          {projeto.deployUrl && (
            <a
              href={projeto.deployUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir ${projeto.titulo} no ar`}
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
