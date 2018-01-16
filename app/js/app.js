"use strict";

document.addEventListener("DOMContentLoaded", function() {
  (function() {
    // check js
    isJsAndTouchSupported.init();

    // menu toggle
    toggleMenu.init();
    //
    // ckeck svg local
    svg4everybody();

    // search toggle
    search.init();

    // mobile accordion
    mobileAcco.init();

    // massonry with filter
    works.init();

    // btn Up;
    scrollUp.setVaribles("scrollup", 200);
    scrollUp.init();

    //header fixed
    headerFixed.setVaribles("js-header", "header--fixed");
    headerFixed.init();
  })();
});
