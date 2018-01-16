"use strict";

(function () {
  /*
    Animate up by click on btn width class scrollup
	*/
  var scrollItem =  null;
  var topHeight = 0;
  var step = 0;
  var winHeight = null;
  var timeToScroll = 0;


  function setVaribles (item, setHeight, setStep) {
    winHeight = $(document).height() || undefined;
    topHeight = setHeight || 100;
    step = setStep || 2;
    scrollItem = $("." + item) || undefined;
    timeToScroll = winHeight/step;
  }

  function setScrollTop () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > topHeight) {
        scrollItem.fadeIn();
      } else {
        scrollItem.fadeOut();
      }
    });
  }

  function animateUp() {
    scrollItem.on("click", function() {
      $("html, body").animate({scrollTop: 0}, timeToScroll);
    });
  }

  function run() {
    setScrollTop();
    animateUp();
  }

  window.scrollUp = {
    setVaribles: setVaribles,
    init: run
  };
}());
