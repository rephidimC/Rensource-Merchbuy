import React from "react";

function HeaderCardSmall(props) {

  return (
    <div style={{ textAlign: "center"  }} className={props.class}>
      <div style={{ backgroundColor: "#EDF2F7" }}>
      <img className={props.location} src={props.first} alt="location" />
      </div>
      <h1>{props.text}</h1>
      <img style={props.display} src={props.second} alt="" />
      <div style={props.none}>
        <p style={{color: "white", fontSize: "1.5rem", margin: "0"}}>9</p>
      </div>
    </div>
  );
}

export default HeaderCardSmall;
