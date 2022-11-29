import React, { useState } from "react";
import "./Menu.css";

import Logo from "../Logo/Logo";
import Buttons from "../Buttons/Buttons";

function Menu(props) {
  function move(type) {
    props.moveAnimate(type);
  }

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Logo shrinkText={props.shrinkText} />
      <Buttons moveAnimate={move} />
    </div>
  );
}

export default Menu;
