import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { TituloSecao } from "../ui/TituloSecao";

const CANAIS_CONTATO = [
  {
    nome: "LinkedIn",
    valor: "/in/gustavo-ciriaco",
    href: "https://www.linkedin.com/in/gustavo-ciriaco",
    icone: FaLinkedin,
    cor: "#0A66C2",
    externo: true,
  },
  {
    nome: "GitHub",
    valor: "/gustavociriaco1",
    href: "https://github.com/gustavociriaco1",
    icone: FaGithub,
    cor: "#f8fafc",
    externo: true,
  },
  {
    nome: "E-mail",
    valor: "gustavociriaco5@hotmail.com",
    href: "mailto:gustavociriaco5@hotmail.com",
    icone: FaEnvelope,
    cor: "#60a5fa",
    externo: false,
  },
];

export function Contato() {
  return (
    <section id="contato" className="secao">
      <div className="container">
        <div className="bloco-card contato-grid">
          <div>
            <TituloSecao
              icone={FaEnvelope}
              titulo="Contato"
              subtitulo="Vamos conversar? Estou aberto a novas oportunidades e projetos."
            />
          </div>

          <div className="contato-cards">
            {CANAIS_CONTATO.map(
              ({ nome, valor, href, icone: Icone, cor, externo }) => (
                <a
                  key={nome}
                  href={href}
                  target={externo ? "_blank" : undefined}
                  rel={externo ? "noreferrer" : undefined}
                  className="contato-card"
                >
                  <Icone size={26} color={cor} />
                  <div>
                    <strong>{nome}</strong>
                    <span>{valor}</span>
                  </div>
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
