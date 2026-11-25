import { FaUser } from "react-icons/fa";
import { TituloSecao } from "../ui/TituloSecao";
import { TECNOLOGIAS } from "../../data/tecnologias";

export function Sobre() {
  return (
    <section id="sobre" className="secao">
      <div className="container">
        <div className="bloco-card sobre-grid">
          <div>
            <TituloSecao icone={FaUser} titulo="Sobre mim" />

            <p className="sobre-texto">
              Sou desenvolvedor Full Stack com foco em criar aplicações web
              modernas, responsivas e bem estruturadas. Tenho experiência
              prática em projetos reais utilizando React, TypeScript, Material
              UI, Python e bancos relacionais.
            </p>
            <p className="sobre-texto">
              Gosto de cuidar do projeto de ponta a ponta — da organização do
              código e interface até a integração com APIs e publicação em
              produção.
            </p>
          </div>

          <div>
            <p className="tech-label">Tecnologias que utilizo</p>
            <div className="tech-grid">
              {TECNOLOGIAS.map(({ nome, icone: Icone, cor }) => (
                <div key={nome} className="tech-card">
                  <Icone size={28} color={cor} />
                  <span>{nome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
