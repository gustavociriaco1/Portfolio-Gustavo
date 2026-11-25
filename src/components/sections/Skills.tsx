import { FaCode } from "react-icons/fa";
import { TituloSecao } from "../ui/TituloSecao";
import { BarraSkill } from "../ui/BarraSkill";
import { SKILLS } from "../../data/skills";

export function Skills() {
  return (
    <section id="skills" className="secao">
      <div className="container">
        <div className="bloco-card">
          <TituloSecao
            icone={FaCode}
            titulo="Skills"
            subtitulo="Minhas principais habilidades"
          />

          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <BarraSkill key={skill.nome} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
