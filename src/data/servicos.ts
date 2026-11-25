import { FaGlobe, FaLayerGroup, FaServer } from "react-icons/fa";
import type { Servico } from "../types/portfolio";

export const SERVICOS: Servico[] = [
  {
    titulo: "Sites & Landing Pages",
    descricao:
      "Páginas rápidas, modernas e responsivas feitas sob medida para apresentar empresas e gerar contatos.",
    entregas: [
      "Layout responsivo (desktop e mobile)",
      "Formulários de contato e SEO básico",
      "Domínio, DNS, deploy e e-mail corporativo",
    ],
    icone: FaGlobe,
  },
  {
    titulo: "Sistemas Web & Painéis",
    descricao:
      "Interfaces organizadas e escaláveis para aplicações internas, dashboards e plataformas de atendimento.",
    entregas: [
      "Front-end com React, TypeScript e Material UI",
      "Componentização limpa e fácil manutenção",
      "Integração completa com APIs REST",
    ],
    icone: FaLayerGroup,
  },
  {
    titulo: "Back-end & Banco de Dados",
    descricao:
      "Estruturação de APIs, regras de negócio e modelagem de dados para aplicações confiáveis em produção.",
    entregas: [
      "APIs e integrações em Python",
      "Bancos relacionais (PostgreSQL e MySQL)",
      "Correção de bugs e otimização de performance",
    ],
    icone: FaServer,
  },
];
