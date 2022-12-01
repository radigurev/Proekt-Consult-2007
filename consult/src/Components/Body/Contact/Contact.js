import React, { useState, useEffect } from "react";
import './Contact.css';

import $ from 'jquery';

function Contact(props) {

    useEffect(() => {
        if (props.show) {
          setTimeout(function () {
            $("#contact").removeClass("display-none");
          }, 1500);
          setTimeout(function() {
            $("#contact").css('left','0');
          },2000);
        } else {
                $('#contact').css('left','200%');
            setTimeout(function () {
            $("#contact").addClass("display-none");
          }, 1500);
        }
      }, [props.show]);
    

    return <div id='contact' className='display-none row'>
        <div className="col-4 justify-content-center d-flex flex-column">
            <input className="inputs m-2" />
            <input className="inputs m-2" />
        </div>
    </div>;
}

export default Contact;