"use strict";

(function () {
  /*
    Toggle class in menu
	*/

  var menuHam = undefined;
  var menu = undefined;
  var action = undefined;
  var subMenu= undefined;

  function selectItems() {
    menuHam = $(".menu__hamburger");
    menu = $(".menu__list");
    action = $(".hamburger");
    subMenu = $(".submenu");
  }

  function setToggleMenu() {
    menuHam.on("click", menuHandler);

    function menuHandler() {
      menuHam.toggleClass("is-active");
      menu.slideToggle(400, function () {
         if ($(this).css("display") === "none") {
           $(this).removeAttr("style");
           subMenu.removeAttr("style");
         }
      });
      function closeMenu() {
        if (menuHam.hasClass("is-active") && $(window).width() > 992) {
          menuHam.removeClass("is-active");
          menu.removeAttr("style");
          subMenu.removeAttr("style");
        }
      }
      $(window).on("resize", closeMenu);
    }
  }

  function run() {
    selectItems();
    setToggleMenu();
  }

  window.toggleMenu = {
    selectItems: selectItems,
    init: run
  };
}());
