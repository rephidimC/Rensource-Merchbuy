import React from "react";
import ThreeCards from "./Three-cards.jsx";
import details from "../business-details.js";

function createEntry(details) {
    return (
      <ThreeCards 
        key={details.id}
        src={details.src}
        threeCardsText1={details.threeCardsText1}
        threeCardsText2={details.threeCardsText2}
        threeCardsText3={details.threeCardsText3}
        text1={details.text1}
        text2={details.text2}
        text3={details.text3}
      />
    );
}
  
function Creation() {
    return (
      <div className="creation">
        {details.map(createEntry)}
      </div>
    );
}

export default Creation;
