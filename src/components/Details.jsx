import React from "react";


function HeaderDetails(props) {

  return (
    <div className="header-details">
        <div className="four-corner">
            <img src="../left-arrow2.png" />
        </div>
        <p className="details-heading">{props.heading}</p>
        <div className="round-edge">
            <img src="../search.png" />
        </div>
        <div className="round-edge cart-side">
            <img src="../shopping-cart.png" />
            <div className="cart-increament">
                <p>{props.number}</p>
            </div>
        </div>
    </div>
  );
}

export default HeaderDetails;
