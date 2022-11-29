import React,{useEffect} from "react";

import "./Logo.css";
import $ from 'jquery';
import MovingText from "react-moving-text";

function Logo(props) {

  useEffect(() => {
    if(props.shrinkText) {
      $('#ml3').css({'font-size':'2rem'});
    }else {
      $('#ml3').css({'font-size':'3.5rem'});
    }
  },[props.shrinkText]);

  return (
    <div className="col-9">
      <div className="row">
        <div className="col-md-2">
          <img
            id="logo"
            className="img"
            src="https://res.cloudinary.com/dzqj0bike/image/upload/v1662386589/ProektConsult2007/Logo-proekt7_black-Model3-removebg-preview_nmlcsj.png"
          />
        </div>
        <div className="col-5 ">
          <MovingText
           id='ml3'
           type="slideInFromLeft"
           duration="3000ms"
           delay="0s"
           direction="normal"
           timing="ease"
           iteration="1"
           fillMode="forwards"
          >
            Проект консулт 2007 ЕООД
          </MovingText>
        </div>
      </div>
    </div>
  );
}

export default Logo;
