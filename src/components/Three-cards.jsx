import React from "react";
import Paragraph from "./Paragraph";

function ThreeCards(props) {
  return (
    <div>
        <img src={props.src}/>
        <Paragraph threeCardsText1={""} text1={"Free sample small tote bag gucci fed..."} text2={"#900 - #1,500"} text3={"MOQ 4 (pieces)"}/>
        <Paragraph threeCardsText1={""} text1={"Free sample small tote bag gucci fed..."} text2={"#900 - #1,500"} text3={"MOQ 4 (pieces)"}/>
        <Paragraph threeCardsText1={""} text1={"Free sample small tote bag gucci fed..."} text2={"#900 - #1,500"} text3={"MOQ 4 (pieces)"}/>
    </div>
  );
}

export default ThreeCards;
