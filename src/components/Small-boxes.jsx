import React from "react";
import SmallBalls from "./small-balls";

function SmallBoxes(props) {

  return (
    <div className={props.mother}>
      <div className={props.content}>
      <SmallBalls smallball="smallball orange small ball-one"/>
      <SmallBalls smallball="smallball orange big ball-two"/>
      <SmallBalls smallball="smallball green big ball-three"/>
      <SmallBalls smallball="smallball green big ball-four"/>
      <SmallBalls smallball="smallball dark-yellow big ball-five"/>
      <SmallBalls smallball="smallball green small ball-six" />
      <SmallBalls smallball="smallball green small ball-seven"/>
      <SmallBalls smallball="smallball green big ball-eight"/>
      <SmallBalls smallball="smallball yellow big ball-nine"/>
      <SmallBalls smallball="smallball green big ball-ten"/>
      <SmallBalls smallball="smallball green small ball-eleven"/>

        <div className="inv-box inv-box-1">
        </div>
        <div className="inv-box inv-box-2">
        </div>
        <div className="mother-text">
          <p className="issues-text">Having any <span>issues</span> with your order?</p>
          <button>Contact Us</button>
        </div>
      </div>
        
        
        
      </div>
  );
}

export default SmallBoxes;
