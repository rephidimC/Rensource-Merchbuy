import React from "react";


function DetailsBody(props) {

  return (
    <div className="body-details">
        <div>
            <img src="" />
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

export default DetailsBody;
