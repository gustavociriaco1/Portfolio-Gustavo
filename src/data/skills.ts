import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiPython,
} from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";
import type { Skill } from "../types/portfolio";

export const SKILLS: Skill[] = [
  { nome: "React", nivel: 90, icone: SiReact, cor: "#61DAFB" },
  { nome: "JavaScript", nivel: 90, icone: SiJavascript, cor: "#F7DF1E" },
  { nome: "TypeScript", nivel: 85, icone: SiTypescript, cor: "#3178C6" },
  { nome: "HTML / CSS", nivel: 95, icone: SiHtml5, cor: "#E34F26" },
  { nome: "Python & APIs", nivel: 80, icone: SiPython, cor: "#3776AB" },
  {
    nome: "Resolução de Problemas",
    nivel: 90,
    icone: FaLightbulb,
    cor: "#FACC15",
  },
];
