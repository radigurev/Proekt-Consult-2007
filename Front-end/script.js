var images = ["https://res.cloudinary.com/dzqj0bike/image/upload/v1646822511/ProektConsult2007/ruhouse/ruhouse-pic3_fstvec.jpg",
  "https://res.cloudinary.com/dzqj0bike/image/upload/v1646822502/ProektConsult2007/ruhouse/ruhouse-hero_iyw0eo.jpg",
   "https://res.cloudinary.com/dzqj0bike/image/upload/v1646822724/ProektConsult2007/main-page-bg1_s5sgfk.jpg"];

    $(function () {
        var i = 0;
        $("body").css({"background-image": "url(" + images[i] + ")"}).fadeIn();
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("body").css({"background-image": "url(" + images[i] + ")"});
            
        }, 5000);
    });
    
setTimeout(function () {
    $("#logo").css({"opacity": "1"});
}, 3000);

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1250,
    delay: (el, i) => 150 * (i+1)
  });


  setTimeout(function (){  
  $("#main-nav").css({"opacity": "1"});
  },1000);

  function clickedAboutUs()
  {
    $("#logo").addClass("move-logo");
  }
 