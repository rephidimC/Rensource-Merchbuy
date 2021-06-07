import React from "react";
import DetailsBody from "../components/Details-Body.jsx";
import HeaderDetails from "../components/Details.jsx";

function Home() {
  return (
      <div className="container">
      <HeaderDetails heading={"Details"} number={"9"} />
      <DetailsBody />

    </div>
  );
}

export default Home;
