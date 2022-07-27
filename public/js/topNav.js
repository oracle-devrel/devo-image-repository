let topNav = document.getElementById("TopNav");
let heroNav = document.getElementById("TechnicalContentHero");

let translate = topNav.clientHeight;
//console.log(translate);

topNav.style.maxWidth = "120rem";

function stickNavBar(x) {
  if (x.matches) {
    heroNav.style.marginTop = translate + "px";
    topNav.style.position = "fixed";
  } else {
    heroNav.style.marginTop = "auto";
    topNav.style.position = "sticky";
  }
}

var x = window.matchMedia("(max-width: 1999px)");
stickNavBar(x);
x.addListener(stickNavBar);





// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".chapters");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}