let topNav = document.getElementById("TopNav");
let hero = document.getElementById("TechnicalContentHero");

let translate = topNav.clientHeight;
//console.log(translate);

topNav.style.maxWidth = "120rem";

function stickNavBar(x) {
  if (x.matches) {
    hero.style.marginTop = translate + "px";
    topNav.style.position = "fixed";
  } else {
    hero.style.marginTop = "auto";
    topNav.style.position = "sticky";
  }
}

var x = window.matchMedia("(max-width: 1999px)");
stickNavBar(x);
x.addListener(stickNavBar);
