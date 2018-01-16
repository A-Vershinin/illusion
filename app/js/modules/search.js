
(function () {
  /*
    Some description
	*/
  // private varibles;

  // private functions
  function searchToggle () {
    var $menu = $('.menu');
    function windowSize() {
      if ($(window).width() >= 992) {
        $menu.on('click', '.search__toggle', onSearch);
      } else {
        $menu.off('click', '.search__toggle', onSearch);
      }
    }

    function onSearch(e) {
      var selector = $(this).data('selector');
      $(selector).toggleClass('menu--show').find('.search__input').focus();
      $(this).toggleClass('active');
      e.preventDefault();
    }
    $(window).on("resize", windowSize);
    $(window).on("load", windowSize);
  }

  // functions which active in module
  function run() {
    searchToggle();
  }

  window.search = {
    // public method export init
    init: run,
  };
}());
