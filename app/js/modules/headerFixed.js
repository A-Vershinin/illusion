"use strict";

(function () {
  var headerS = null;
  var headerHeight = 0;
  var headerBottom = null;
  var headerTopHeight = 0;
  var activeClass = null;

  function headerFixed() {
    $(document).on("scroll", function () {
      var documentScroll = $(this).scrollTop();
      if (documentScroll > headerHeight) {
        headerS.addClass(activeClass);
        headerBottom.css({
          "marginTop": headerTopHeight
        });
      } else {
        headerBottom.removeAttr("style");
        headerS.removeClass(activeClass);
      }
    });
  }

  function setVaribles(jsHeader, fixedClass) {
    headerS = $("#" + jsHeader);
    headerHeight = headerS.height();
    headerBottom = headerS.children().last();
    headerTopHeight = headerS.children().first().height();
    activeClass = fixedClass;
  }
  function run() {
    if ($(window).width() > 540) {
      headerFixed();
    }
  }

  window.headerFixed = {
    setVaribles: setVaribles,
    init: run
  };
}());
