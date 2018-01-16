"use strict";

(function () {

  // private functions
  function showAcco() {
    $(".menu__link, .submenu__link").click(function(e) {
      e.preventDefault();
      var $this = $(this);

      if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
      } else {
        $this.parent().parent().find('li .submenu').removeClass('show');
        $this.parent().parent().find('li .submenu').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
      }
    });
  }
  function run() {
    showAcco();
  }

  window.mobileAcco = {
    init: run
  };
}());
