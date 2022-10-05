window.onresize = window.onload = function () {
  var title = document.querySelectorAll(".section-header");
  if (window.innerWidth <= 767) {
    for (let i = 0; i < title.length; i++) {
      title[i].style.paddingTop = "0rem";
    }
  } else {
    for (let i = 0; i < title.length; i++) {
      title[i].style.paddingTop = "5rem";
    }
  }
};
