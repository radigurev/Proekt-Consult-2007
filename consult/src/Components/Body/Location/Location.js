import React, { useEffect, useState } from "react";

import $ from "jquery";
import "./Location.css";

function Location(props) {
  useEffect(() => {
    if (props.show) {
      setTimeout(function () {
        $("#location").removeClass("display-none");
      }, 1500);
      setTimeout(function() {
        $("#location").css('left','0');
      },2000);
    } else {
            $('#location').css('left','-200%');
        setTimeout(function () {
        $("#location").addClass("display-none");
      }, 1500);
    }
  }, [props.show]);

//Изработване на проекти по част конструктивна, BIM проектиране, Контрол по време на строителство

  return <div id="location" className="display-none row">
  <div className="col-4">
  <div>
   <img className="serviceImg" align='left' src="https://res.cloudinary.com/dzqj0bike/image/upload/v1646822505/ProektConsult2007/ruhouse/ruhouse-pic1_tm2okh.jpg" />
   </div>
    <div>
      <h6>Изработване на проекти по част конструктивна</h6>
    </div>
  </div>
  <div className="col-4">
  <div>
   <img className="serviceImg" align='left' src="https://res.cloudinary.com/dzqj0bike/image/upload/v1646822505/ProektConsult2007/ruhouse/ruhouse-pic1_tm2okh.jpg" />
   </div>
    <div>
      <h6>BIM проектиране</h6>
    </div>
  </div>
  <div className="col-4">
  <div>
   <img className="serviceImg" align='left' src="https://res.cloudinary.com/dzqj0bike/image/upload/v1646822505/ProektConsult2007/ruhouse/ruhouse-pic1_tm2okh.jpg" />
   </div>
    <div>
      <h6>Контрол по време на строителство</h6>
    </div>
  </div>
  </div>;
}

export default Location;
