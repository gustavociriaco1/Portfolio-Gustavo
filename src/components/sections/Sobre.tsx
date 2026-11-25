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
              Sou desenvolvedor Full Stack com experiência prática em projetos
              comerciais e 1 ano de atuação em equipe ágil na 20DASH,
              desenvolvendo e mantendo aplicações web para clientes reais.
            </p>
            <p className="sobre-texto">
              Trabalho com React, TypeScript, Material UI, Python e bancos de
              dados relacionais, cuidando do projeto de ponta a ponta — da
              interface responsiva e integração de APIs até a configuração de
              domínio, deploy e colocação no ar.
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
