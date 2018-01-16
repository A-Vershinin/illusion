"use strict";

(function () {
  /*
    works section
	*/
  var grid = document.querySelector('.works__gallery');
  var msnry;
  // element selectors
  var imgAll = document.querySelectorAll('.works__gallery-item');
  var imgTh3d = document.querySelectorAll('.th3d');
  var imgIllustrator = document.querySelectorAll('.illustration');
  var imgPhoto = document.querySelectorAll('.photography');
  var imgWeb = document.querySelectorAll('.web');
  // buttons
  var tabsUl = document.getElementById('works__tump');
  var lis = tabsUl.children;

  function createGrid () {
    imagesLoaded(grid, function() {
      msnry = new Masonry( grid, {
        itemSelector: '.works__gallery-item',
        columnWidth: '.works__gallery-item',
        percentPosition: true
      });
    });

    // //element & class name
    function toggleClass(parentElem, childElems, className) {
      // console.log(parentElem.parentNode);
      // console.log(childElems);
      // console.log(className);
      for (var i = 0; i < childElems.length; i++) {
        if (childElems[i] == parentElem) {
          childElems[i].classList.add(className);
        }
        else {
          childElems[i].classList.remove(className);
        }
      }
    }
    function showImages(showImg, hideImg1, hideImg2, hideImg3) {
      for(var i = 0; i < showImg.length; i++) {
        showImg[i].style.display = "block";
      }
      for(var i = 0; i < hideImg1.length; i++) {
        hideImg1[i].style.display = "none";
      }
      for(var i = 0; i < hideImg2.length; i++) {
        hideImg2[i].style.display = "none";
      }
      for(var i = 0; i < hideImg3.length; i++) {
        hideImg3[i].style.display = "none";
      }
    }

    tabsUl.addEventListener('click', function(event) {
      var tabLi = event.target.parentNode;
      toggleClass(tabLi, lis, 'works__tump-item--active');
      //show all images
      if (event.target.id == "all") {
        for (var i = 0; i< imgAll.length; i++) {
          imgAll[i].style.display = "block";
        }
      }
      //show th3d
      if (event.target.id == "th3d") {
        showImages(imgTh3d, imgIllustrator, imgPhoto, imgWeb);
      }
      // show illustration
      if (event.target.id == "illustration") {
        showImages(imgIllustrator, imgTh3d, imgPhoto, imgWeb);
      }
      // show photography
      if (event.target.id == "photography") {
        showImages(imgPhoto, imgTh3d, imgIllustrator, imgWeb);
      }
      // show web
      if (event.target.id == "web") {
        showImages(imgWeb, imgTh3d, imgIllustrator, imgPhoto);
      }
      msnry.layout();
    });
  }
  // functions which active in module
  function run() {
    createGrid();
  }

  window.works = {
    // public method export init
    init: run
  };
}());
