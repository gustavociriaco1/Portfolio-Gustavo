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

export interface Servico {
  titulo: string;
  descricao: string;
  entregas: string[];
  icone: IconType;
}
