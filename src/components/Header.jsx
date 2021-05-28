import React from "react";

function Header() {
  // var dateToday = new Date();
  // var timeNow = dateToday.getTime();

  return (
    <header>
      <div className="lhs">
        <h1>9:41</h1>
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
