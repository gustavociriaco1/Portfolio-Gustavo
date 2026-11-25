import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMui,
  SiPython,
  SiPostgresql,
  SiGit,
  SiVite,
} from "react-icons/si";
import type { Tecnologia } from "../types/portfolio";

export const TECNOLOGIAS: Tecnologia[] = [
  { nome: "React", icone: SiReact, cor: "#61DAFB" },
  { nome: "TypeScript", icone: SiTypescript, cor: "#3178C6" },
  { nome: "JavaScript", icone: SiJavascript, cor: "#F7DF1E" },
  { nome: "HTML5", icone: SiHtml5, cor: "#E34F26" },
  { nome: "CSS3", icone: SiCss, cor: "#1572B6" },
  { nome: "Material UI", icone: SiMui, cor: "#007FFF" },
  { nome: "Python", icone: SiPython, cor: "#3776AB" },
  { nome: "PostgreSQL", icone: SiPostgresql, cor: "#4169E1" },
  { nome: "Git", icone: SiGit, cor: "#F05032" },
  { nome: "Vite", icone: SiVite, cor: "#646CFF" },
];
