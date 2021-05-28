import React from "react";
import SmallBoxes from "./Small-boxes.jsx"

function Boxes() {

  return (
    <div className="box-section">
      <SmallBoxes mother="box left-box" content="none" />
      <SmallBoxes mother="box middle-box" content="show" />
      <SmallBoxes mother="box right-box" content="none" />
    </div>
  );
}

export default Boxes;
