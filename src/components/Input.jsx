import React from "react";

function Input(props) {
  // var dateToday = new Date();
  // var timeNow = dateToday.getTime();

  return (
      <div>
<input placeholder={props.placeholder} />
<img style={{position: "absolute", right: "5rem", marginTop: "2rem", width: "2.5rem"}} src="/search.png" />
      </div>
  );
}

export default Input;
