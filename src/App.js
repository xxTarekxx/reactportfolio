import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Projects";
import Contact from "./components/contact/Contact";
import Skills from './components/skills/Skills'
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Projects from "./components/portfolio/Projects";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Projects />
        <Skills/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
