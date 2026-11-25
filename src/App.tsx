import { Header } from "./components/layout/Header";
import { Inicio } from "./components/sections/Inicio";
import { Sobre } from "./components/sections/Sobre";
import { Projetos } from "./components/sections/Projetos";
import { Servicos } from "./components/sections/Servicos";
import { Contato } from "./components/sections/Contato";
import { Footer } from "./components/layout/Footer";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Inicio />
        <Sobre />
        <Projetos />
        <Servicos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
