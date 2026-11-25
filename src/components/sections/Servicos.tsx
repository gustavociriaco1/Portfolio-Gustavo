import { FaBriefcase, FaCheck } from "react-icons/fa";
import { TituloSecao } from "../ui/TituloSecao";
import { SERVICOS } from "../../data/servicos";

export function Servicos() {
  return (
    <section id="servicos" className="secao">
      <div className="container">
        <div className="bloco-card">
          <TituloSecao
            icone={FaBriefcase}
            titulo="O que eu desenvolvo"
            subtitulo="Soluções completas do layout à publicação em produção"
          />

          <div className="servicos-grid">
            {SERVICOS.map(({ titulo, descricao, entregas, icone: Icone }) => (
              <article key={titulo} className="servico-card">
                <div className="servico-icone">
                  <Icone size={22} />
                </div>

                <h3>{titulo}</h3>
                <p className="servico-desc">{descricao}</p>

                <ul className="servico-lista">
                  {entregas.map((item) => (
                    <li key={item}>
                      <FaCheck className="servico-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
