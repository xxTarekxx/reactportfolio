import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Tech Nerd</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>444 555 6666</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>Asadfgad@kdjgsad.com</span>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}
