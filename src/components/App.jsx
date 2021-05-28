import React, { useState } from "react";
import Header from "./Header.jsx";
import HeaderCard from "./Header-card.jsx";
import Input from "./Input.jsx";
import Boxes from "./Boxes.jsx";
import ProductCard from "./ProductCard.jsx";
import ThreeCards from "./Three-cards.jsx";

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
      <ThreeCards />
    </div>
  );
}

export default App;
