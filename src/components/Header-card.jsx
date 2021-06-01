import React from "react";
import HeaderCardSmall from "./Header-card-small.jsx";

function headerCard() {
  // var dateToday = new Date();
  // var timeNow = dateToday.getTime();

  return (
    <div className="HeaderCard">
      <HeaderCardSmall
      location = "location"
      class = "HeaderCardSmall"
        first = "/location.svg"
        text = "Lagos"
        second = "/down-arrow.png"
        display = {{width: "1.9rem", position: "relative", bottom: "1rem"}}
        none = {{display: "none"}}
      />
       <div className="thin-vertical-line"></div>
      <HeaderCardSmall
      location = "location-2"
      class = "HeaderCardSmallSecondChild"
        first = "/wallet.png"
        text = "My Orders"
        display = {{display: "none"}}
        none = {{display: "none"}}
      />
       <div className="thin-vertical-line"></div>
      <HeaderCardSmall 
      location = "location-3"
      class = "HeaderCardSmallThirdChild"
        first = "/shopping-cart.png"
        text = "Cart"
        display = {{display: "none"}}
        none = {{backgroundColor: "#EE6F44", width: "2rem", height: "2rem", top: "-2.5rem", right: "8.7rem"}}
      />
    </div>
  );
}

export default headerCard;
