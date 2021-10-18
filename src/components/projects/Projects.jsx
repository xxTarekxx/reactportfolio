import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      {/* <div className="portfolio">
        <div className="active">Weather App</div>
        <div className="active">Tip Caculator</div>
        <div className="active">Tip Caculator</div>
        <div className="active">Tip Caculator</div>
        <div className="active">Tip Caculator</div>
      </div> */}
      <div className="container">
        <div className="item">
          <img src="../assets/weather.png" alt="" />
          <h3>Weather App</h3>
        </div>
        <div className="item">
          <img src="../assets/cal.png" alt="" />
          <h3>Tip Calculator</h3>
        </div>
        <div className="item">
          <img src="../assets/reacts.png" alt="" />
          <h3>React Search</h3>
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
