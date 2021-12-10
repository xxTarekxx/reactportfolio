import React from "react";
import "./clock.scss"

function Showtime() {
  let time = new Date().toLocaleTimeString();
  let [currentTime, changeTime] = React.useState(time);

  function checkTime() {
    time = new Date().toLocaleTimeString();
    changeTime(time);
  }

  setInterval(checkTime, 1000);

  return (
      <div className="localTime">{currentTime}</div>
  );
}

export default Showtime;
