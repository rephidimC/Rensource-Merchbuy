import React from "react";
import Header from "../components/Header.jsx";
import HeaderCard from "../components/Header-card.jsx";
import Input from "../components/Input.jsx";
import Boxes from "../components/Boxes.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Creation from "../components/Creation.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
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
      <Footer />
    </div>
  );
}

export default Home;
