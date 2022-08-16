window.onresize = window.onload = function () {
  //console.log("Window Width: " + window.innerWidth);
  var tabContent = document.querySelectorAll(".tabs-content");
  var tabs = document.getElementById("fa4035f6-6d8a-46ea-9d6f-efe23ddb2075");
  var heightList = [];

  if (window.innerWidth <= 767) {
    for (let i = 0; i < tabContent.length; i++) {
      heightList.push(tabContent[i].clientHeight);
    }
    var maxHeight = Math.max(...heightList);
    let adjustHeight = maxHeight - 80;

    //console.log("Tabs Separation: " + adjustHeight);
    tabs.style.marginBottom = adjustHeight + "px";
  } else {
    tabs.style.marginBottom = "auto";
  }

  //Add ALT to missing images or Icons
  let altImage = document.querySelectorAll("img");

  for (var i = 0; i < altImage.length; i++) {
    var image = altImage[i].getAttribute("alt");
    //console.log(image)
    altImage[i].setAttribute("height", "auto");
    altImage[i].setAttribute("width", "auto");

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

  //Accesibility Corrections: u10btn
  let missingBTNsu10 = document.querySelectorAll(".u10btn");
  for (var i = 0; i < missingBTNsu10.length; i++) {
    missingBTNsu10[i].role = "button";
    missingBTNsu10[i].setAttribute(
      "aria-label",
      "Footer button with no action"
    );
    console.log(missingBTNsu10[i]);
  }
};
