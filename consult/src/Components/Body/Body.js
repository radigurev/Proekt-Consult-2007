import React, { useState, useEffect } from "react";

import Location from "./Location/Location";

import './Body.css';
import $ from 'jquery';
function Body(props) {

    const [us,setUs] = useState(false);
    const [contact,setContact] = useState(false);
    const [projects,setProjects] = useState(false);
    const [location,setLocation] = useState(false);

  useEffect(() => {
    if (props.windowType != "") moveMenu(true);
    else moveMenu(false);

    if(props.windowType === 'location') setLocation(true);
    else setLocation(false);

    if (location) {
        setTimeout(function () {
          $("#body-div").removeClass("disabled");
        }, 1000);
      } else {
        setTimeout(function () {
          $("#body-div").css('left','200%').addClass("disabled");
        }, 1000);
      }

  }, [props.windowType,location]);

  function moveMenu(shouldMove) {
    if(shouldMove)
    props.setMove(true);
    else
    props.setMove(false);
  }
  return (
    <div id="body-div" className="disabled height-zero">
        <Location show={location} />
    </div>
  )
}

export default Body;
