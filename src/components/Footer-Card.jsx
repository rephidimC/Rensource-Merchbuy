import React from "react";

function FooterCard(props) {
  return (
      <div className="footer-card">
      <img src={props.img} />
      <p>{props.text}</p>
      </div>
  );
}

export default FooterCard;
