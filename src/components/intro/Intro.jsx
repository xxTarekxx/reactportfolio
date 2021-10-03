import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer" id="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm </h2>
                    <h1>Tarek Ismael</h1>
                    <h3>Front End Developer</h3>
                </div>
            </div>
        </div>
    )
}
