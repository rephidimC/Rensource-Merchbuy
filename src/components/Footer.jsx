import React from "react";
import FooterCard from "./Footer-Card";

function Footer() {

  return (
    <footer>
        <div>
            <FooterCard img={"/dog-house.png"} text={"Home"} />
            <FooterCard img={"/shopping-cart.png"} text={"Buy"} />
            <FooterCard img={"/tag.png"} text={"Deals"} />
            <FooterCard img={"/purse.png"} text={"Wallet"} />
            <FooterCard img={"/menu.png"} text={"More"} />
        </div>
    </footer>
  );
}

export default Footer;
