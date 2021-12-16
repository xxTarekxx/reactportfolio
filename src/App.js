import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
      </Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
