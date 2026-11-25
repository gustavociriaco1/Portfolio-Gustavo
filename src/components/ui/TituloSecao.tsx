import type { IconType } from "react-icons";

interface TituloSecaoProps {
  icone: IconType;
  titulo: string;
  subtitulo?: string;
}

export function TituloSecao({
  icone: Icone,
  titulo,
  subtitulo,
}: TituloSecaoProps) {
  return (
    <div className="titulo-secao">
      <div className="titulo-secao-linha">
        <Icone className="titulo-secao-icone" />
        <h2>{titulo}</h2>
      </div>
      {subtitulo && <p className="titulo-secao-sub">{subtitulo}</p>}
    </div>
  );
}
