import React from "react";


function DetailsBody(props) {

  return (
    <div className="body-details">
        <div className="body-details-container">
            <img src="../shopping.png" />
        </div>
        <div className="product-details">
          <p className="product-name">{props.productName}</p>
          <p className="product-specifics">{props.productDetails}</p>
          <p className="product-price">{props.productPrice}<span className="product-price-span">/Piece</span></p>
        </div>
        <div className="thin-line-2"></div>
        <div className="product-description">
          <p>Product Description</p>
          <img src="../left-arrow2.png" />
        </div>
        <div className="thin-line-2"></div>
        <div className="reviews">
          <p>Reviews and Ratings</p>
          <p>View all</p>
        </div>
        
        
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </div>
  );
}

export default DetailsBody;
