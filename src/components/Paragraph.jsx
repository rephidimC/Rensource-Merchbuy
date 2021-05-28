import React from "react";

function Paragraph(props) {
  return (
    <div>
        <p className={props.threeCardsText1}>{props.text1}</p>
        <p className={props.threeCardsText2}>{props.text2}</p>
        <p className={props.threeCardsText3}>{props.text3}</p>
    </div>
  );
}

export default Paragraph;
