import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";


export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 2000,
      backSpeed: 50,
      showCursor: true,
      strings: ["Developer", "ReactJS", "Angular", "Bootstrap", "VueJs"],
    });
  }, []);
  return (
    <div className="intro" id="intro" >
      <div className="left">
        <div className="imgContainer" id="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm </h2>
          <h1>Tarek Ismael</h1>
          <h3>
            Front End <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
