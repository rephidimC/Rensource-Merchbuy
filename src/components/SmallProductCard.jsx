import React from "react";

function SmallProductCard(props) {
  return (
    <div className={props.smallProductCard}>
        <div className={props.eachProductCard}>
        <div className="product-card-icons-div">
            <img className={props.hide} src={props.image2} alt=""/>
            <img className={props.iconImg} src={props.image} alt=""/>
        </div>
        </div>
        <p className="small-product-card-p">{props.text}</p>
    </div>
  );
}

export default SmallProductCard;
