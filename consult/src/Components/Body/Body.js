import React, { useState, useEffect } from "react";

import Location from "./Location/Location";
import Contact from './Contact/Contact';

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
    if(props.windowType === 'contact') setContact(true);
    else setContact(false);

    if (location || contact) {
        setTimeout(function () {
          $("#body-div").removeClass("disabled");
        }, 1000);
      } else {
        setTimeout(function () {
          $("#body-div").css('left','200%').addClass("disabled");
        }, 1000);
      }

      console.log(location);
      console.log(contact);
  }, [props.windowType,location,contact]);

  function moveMenu(shouldMove) {
    if(shouldMove)
    props.setMove(true);
    else
    props.setMove(false);
  }
  return (
    <div id="body-div" className="disabled height-zero">
        <Location show={location} />
        <Contact show={contact}/>
    </div>
  )
}

export default Body;
