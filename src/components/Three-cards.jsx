import React from "react";
import Paragraph from "./Paragraph";

function ThreeCards(props) {
  return (
    <div className="three-cards">
        <img className="prod-img" src={props.src}/>
        <Paragraph threeCardsText1={props.threeCardsText1} threeCardsText2={props.threeCardsText2} threeCardsText3={props.threeCardsText3} text1={props.text1} text2={props.text2} text3={props.text3}/>
    </div>
  );
}

export default ThreeCards;
