import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import $ from 'jquery';
import Menu from "./Components/Menu/Menu";
import Body from "./Components/Body/Body";

function App() {
  const [window, setWindow] = useState("");
  const [shouldMove, setShouldMove] = useState(false);

  function windowType(type) {
    if(type != window)
    setWindow(type);
    else
    setWindow('');
  }

  function move(move) {
    if(move) {
      $('#root').css({'top':'30%','width': '70vw'});
      setShouldMove(true);
    }else {
      setTimeout(function() {
        $('#root').css({'top':'50%','width': '100vw'});
      },1000);
      setShouldMove(false);
    }
  }

  return (
    <div>
      <Menu moveAnimate={windowType} shrinkText={shouldMove}/>
      <Body setMove={move} windowType={window} />
    </div>
  );
}

export default App;
