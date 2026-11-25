import { Header } from "./components/layout/Header";
import { Inicio } from "./components/sections/Inicio";
import { Sobre } from "./components/sections/Sobre";
import { Projetos } from "./components/sections/Projetos";
import { Skills } from "./components/sections/Skills";
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
        <Skills />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
