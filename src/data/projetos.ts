import type { Projeto } from "../types/portfolio";

export const PROJETOS: Projeto[] = [
  {
    id: "cf-ar-condicionado",
    titulo: "CF Ar Condicionado",
    descricao:
      "Site comercial em produção desenvolvido do zero, com layout responsivo, formulário de orçamento e infraestrutura de domínio e e-mail corporativo.",
    imagem:
      "https://placehold.co/600x340/0f1624/6366f1?text=CF+Ar+Condicionado",
    tecnologias: ["React", "React Router", "CSS3", "Vercel"],
    deployUrl: "https://cfarcondicionado.com.br",
  },
  {
    id: "console-atendente",
    titulo: "Console de Chamados",
    descricao:
      "Painel de atendimento para gestão de chamados escalados por IA, construído com foco em produtividade, filtros e integração com API REST.",
    imagem: "https://placehold.co/600x340/0f1624/3b82f6?text=Console+Atendente",
    tecnologias: ["React", "TypeScript", "Material UI", "API REST"],
    githubUrl: "https://github.com/",
  },
];
