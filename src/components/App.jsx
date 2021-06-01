import React, { useState } from "react";
import Header from "./Header.jsx";
import HeaderCard from "./Header-card.jsx";
import Input from "./Input.jsx";
import Boxes from "./Boxes.jsx";
import ProductCard from "./ProductCard.jsx";
import Creation from "./Creation.jsx"
// import ThreeCards from "./Three-cards.jsx";
// import details from "../business-details.js";
import Footer from "./Footer.jsx";

// function createEntry(details) {
//   return (
//     <ThreeCards 
//       key={details.id}
//       src={details.src}
//       threeCardsText1={details.threeCardsText1}
//       threeCardsText2={details.threeCardsText2}
//       threeCardsText3={details.threeCardsText3}
//       text1={details.text1}
//       text2={details.text2}
//       text3={details.text3}
//     />
//   );
// }

function App() {
  return (
    <div className="container">
      <Header />
      <div className="thin-line"></div>
      <HeaderCard />
      <div className="thin-line"></div>
      <Input placeholder="Search merchbuy"/>
      <Boxes />
      <ProductCard />
      <Creation />
      {/* {details.map(createEntry)} */}
      <Footer />
    </div>
  );
}

export default App;
