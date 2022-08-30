//Get the button:
topBTN = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
  adjustPosition();
};

window.onresize = function () {
  adjustPosition();
};

function adjustPosition() {
  var width = window.innerWidth;

  if (width >= 1920) {
    var newPos = (width - 1920) / 2 + 30;
    topBTN.style.right = newPos + "px";
  } else {
    topBTN.style.right = "30px";
  }
}

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    topBTN.style.display = "block";
  } else {
    topBTN.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
