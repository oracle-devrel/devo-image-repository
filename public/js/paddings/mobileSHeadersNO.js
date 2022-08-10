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

  //Add ALT to missing images or Icons
  let altImage = document.querySelectorAll("img");

  for (var i = 0; i < altImage.length; i++) {
    var image = altImage[i].getAttribute("alt");
    //console.log(image)

    if (image == null) {
      altImage[i].setAttribute("alt", "Developer Resource Center Icon");
      console.log(image + " ALT updated");
    }
  }

  //Update missing links
  let invisibleLinks = document.querySelectorAll("a");
  for (var i = 0; i < invisibleLinks.length; i++) {
    var invLink = invisibleLinks[i].getAttribute("href");
    //console.log(invisibleLinks[i]);
    //console.log(invisibleLinks[i].href)

    if (invLink == null) {
      invisibleLinks[i].setAttribute("href", "#");
      console.log("LINK UPDATED TO #");
    }
    //console.log(invisibleLinks[i].href)
    //console.log(invisibleLinks[i]);
  }

  //Remove Aria Label
  let ariaSocialAnkle = document.querySelector("#social-ankle-title");
  ariaSocialAnkle.removeAttribute("aria-label");
  console.log("Aria Label for Social Ankle Removed");

  let closeNavBTN = document.querySelectorAll(".u30navw3 .close");

  for (var i = 0; i < closeNavBTN.length; i++) {
    closeNavBTN[i].setAttribute("data-lbl", "close");
    console.log(closeNavBTN[i]);
  }
};
