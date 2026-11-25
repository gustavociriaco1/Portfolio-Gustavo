import { FaFolderOpen } from "react-icons/fa";
import { TituloSecao } from "../ui/TituloSecao";
import { CardProjeto } from "../ui/CardProjeto";
import { PROJETOS } from "../../data/projetos";

export function Projetos() {
  return (
    <section id="projetos" className="secao">
      <div className="container">
        <div className="bloco-card">
          <TituloSecao
            icone={FaFolderOpen}
            titulo="Projetos"
            subtitulo="Alguns projetos reais que desenvolvi"
          />

          <div className="projetos-grid">
            {PROJETOS.map((projeto) => (
              <CardProjeto key={projeto.id} projeto={projeto} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
