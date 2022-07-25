window.onresize = window.onload = function () {
  //console.log("Window Width: " + window.innerWidth);
  var title = document.querySelectorAll(".section-header");

  if (window.innerWidth <= 767) {
    for (let i = 0; i < title.length; i++) {
      //console.log(title[i]);
      title[i].style.paddingTop = "0rem";
    }
    console.log("Mobile Headers updated");
  } else {
    for (let i = 0; i < title.length; i++) {
      //console.log(title[i]);
      title[i].style.paddingTop = "5rem";
    }
    console.log("Desktop Headers updated");
  }
};
