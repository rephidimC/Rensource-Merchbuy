import React from "react";
import Header from "../components/Header.jsx";
import HeaderCard from "../components/Header-card.jsx";
import Input from "../components/Input.jsx";
import Boxes from "../components/Boxes.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Creation from "../components/Creation.jsx";
import Footer from "../components/Footer.jsx";
import FooterCard from "../components/Footer-Card.jsx";

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
        <Footer>
          <div>
              <FooterCard img={"/dog-house.png"} text={"Home"} />
              <FooterCard img={"/shopping-cart.png"} text={"Buy"} />
              <FooterCard img={"/tag.png"} text={"Deals"} />
              <FooterCard img={"/purse.png"} text={"Wallet"} />
              <FooterCard img={"/menu.png"} text={"More"} />
          </div>
        </Footer>    
      </div>
  );
}

export default Home;
