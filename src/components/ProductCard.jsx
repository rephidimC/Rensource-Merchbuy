import React from "react";
import SmallProductCard from "./SmallProductCard";

function ProductCard() {
  return (
    <div className="product-card">
      <SmallProductCard smallProductCard={"small-product-card margin-right"} iconImg={"icon-img"} hide={"none"} eachProductCard={"small-card blue-product"} image={"/card.png"} text={"Product categories"}/>
      <SmallProductCard smallProductCard={"small-product-card margin-right"} iconImg={"icon-img"} hide={"fire-icon"} eachProductCard={"small-card orange-product"} image={"/fire.png"} image2={"/fire2.png"} text={"Popular Products"}/>
      <SmallProductCard smallProductCard={"small-product-card margin-right"} iconImg={"thumb"} hide={"wrist-icon"} eachProductCard={"small-card purple-product"} image={"/thumbsup.png"} image2={"/thumbsup2.png"} text={"Recommended Products"}/>
      <SmallProductCard smallProductCard={"small-product-card move-top"} iconImg={"shop"} hide={"none"} eachProductCard={"small-card green-product"} image={"/shop.png"} text={"Shops"}/>
    </div> 
  )
};

export default ProductCard;