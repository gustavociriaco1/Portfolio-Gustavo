import type { IconType } from "react-icons";

export interface Tecnologia {
  nome: string;
  icone: IconType;
  cor: string;
}

export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  tecnologias: string[];
  githubUrl?: string;
  deployUrl?: string;
}
export interface Skill {
  nome: string;
  nivel: number;
  icone: IconType;
  cor: string;
}
