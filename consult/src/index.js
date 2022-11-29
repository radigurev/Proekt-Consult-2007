import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

var images = ["https://res.cloudinary.com/dzqj0bike/image/upload/v1646822511/ProektConsult2007/ruhouse/ruhouse-pic3_fstvec.jpg",
  "https://res.cloudinary.com/dzqj0bike/image/upload/v1646822502/ProektConsult2007/ruhouse/ruhouse-hero_iyw0eo.jpg",
   "https://res.cloudinary.com/dzqj0bike/image/upload/v1646822724/ProektConsult2007/main-page-bg1_s5sgfk.jpg"];

    $(function () {
        var i = Math.floor(Math.random() * images.length);
        $("body").css({"background":"linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.9)), url("+images[i]+")"}).fadeIn();
    });
    
setTimeout(function () {
    $("#logo").css({"opacity": "1"});
}, 3000);

  function clickedAboutUs()
  {
    $("#logo").addClass("move-logo");
  }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
