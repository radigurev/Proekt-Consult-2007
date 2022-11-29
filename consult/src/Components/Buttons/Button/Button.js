import React, { useState, useEffect } from "react";

import "./Button.css";

function Button(props) {
  const [opacity, setOpacity] = useState(0);

  function clicked() {
    props.moveAnimate(props.type);
  }

  useEffect(() => {
    setTimeout(function () {
      setOpacity(1);
    }, props.time);
  }, []);

  return (
    <div
      style={{ opacity: opacity }}
      className="wrapper-btn col-md-6"
      onClick={clicked}
    >
      <span className="fa-stack  fa-3x">
        <i className={"fa-stack-1x fa-inverse " + props.icon}></i>
      </span>
      <p>{props.text}</p>
    </div>
  );
}

export default Button;
