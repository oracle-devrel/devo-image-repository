//Sticks Menu Bar
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

//End -------------Sticks Menu Bar
