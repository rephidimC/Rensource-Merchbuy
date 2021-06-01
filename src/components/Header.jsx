import React, { useState } from "react";

function Header() {
  // var today = new Date();
  // var time = today.getHours() + ":" + today.getMinutes();
  // const [currentTime, setCurrentTime] = useState({time});

  let generatedTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric"
  });
  var [time, setTime] = useState(generatedTime);

  function getTime() {
    const newTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric"
    });
    setTime(newTime);
  }
  setInterval(getTime, 1000);

  return (
    <header>
      <div className="lhs">
        <h1>{time}</h1>
        <p>Trollbasket</p>
      </div>
      <div className="rhs">
        <img src="/signal-bars.png" alt="signal-bars" />
        <img src="/wi-fi.png" alt="wifi" />
        <img src="/battery.png" alt="charging" />
      </div>
    </header>
  );
}

export default Header;
