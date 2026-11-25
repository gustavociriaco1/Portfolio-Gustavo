import type { Skill } from "../../types/portfolio";

interface BarraSkillProps {
  skill: Skill;
}

export function BarraSkill({ skill }: BarraSkillProps) {
  const Icone = skill.icone;

  return (
    <div className="skill-item">
      <div className="skill-icone">
        <Icone size={26} color={skill.cor} />
      </div>

      <div className="skill-info">
        <div className="skill-topo">
          <span>{skill.nome}</span>
          <span className="skill-porcentagem">{skill.nivel}%</span>
        </div>

        <div className="skill-trilha">
          <div
            className="skill-progresso"
            style={{ width: `${skill.nivel}%` }}
          />
        </div>
      </div>
    </div>
  );
}
