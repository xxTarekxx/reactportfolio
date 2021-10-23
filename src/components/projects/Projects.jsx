import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      {/* <h1>Projects</h1> */}
      <div className="portfolio">
        <div className="active">Front End</div>
        <div className="active">Back End</div>
      </div>
      <div className="container">
        <div className="item">
          <img src="../assets/weather.png" alt="" />
          <h3>Weather Appss</h3>
        </div>
        <div className="item">
          <img src="../assets/cal.png" alt="" />
          <h3>Tip Calculator</h3>
        </div>
        <div className="item">
          <img src="../assets/reacts.png" alt="" />
          <h3>Multi-Search Engines</h3>
        </div>
        <div className="item">
          <img src="../assets/weather.png" alt="" />
          <h3>Weather App</h3>
        </div>
        <div className="item">
          <img src="../assets/weather.png" alt="" />
          <h3>Weather App</h3>
        </div>
        <div className="item">
          <img src="../assets/weather.png" alt="" />
          <h3>Weather App</h3>
        </div>
      </div>
    </div>
  );
}
