import "./projects.scss"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                <li>Featured</li>
                <li>Web App</li>
                <li>Contribution</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="../assets/weather.png" alt="" />
                    <h3>Weather App</h3>
                </div>
            </div>
        </div>
    )
}
