import React from "react";
import DetailsBody from "../components/Details-Body.jsx";
import HeaderDetails from "../components/Details.jsx";

function Home() {
  return (
      <div className="container">
      <HeaderDetails heading={"Details"} number={"9"} />
      <DetailsBody productName={"NIKE Huararche 2019"} productDetails={"Get comfy and comfortable with the new 2019 designer sneaker for all your events"} productPrice={"N45,000 - N80,000"} />

    </div>
  );
}

export default Home;
