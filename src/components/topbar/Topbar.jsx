import "./topbar.scss";
import { Person, Mail, Shop } from "@material-ui/icons";
import Showtime from "../clock/Clock";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        {" "}
        {/*wrapping navbar components*/}
        <div className="left">
          <a href="#intro" className="logo">
            Tarek I.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>444 555 6666</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>Asadfgad@kdjgsad.com</span>
          </div>
        </div>
        <span className="localTime">
       
        </span>
        <div className="right">
        <Showtime />
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>

        </div>
      </div>
    </div>
  );
}
