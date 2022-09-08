function changeHeaderLinks() {
  //Update Header Links: Add Prefix to flowless navigation
  let headerLinks = document.querySelectorAll("#Header a, #Footer a");
  let headerURL = location.href;

  if (headerURL.includes("/site/devo/") === true) {
    for (var i = 0; i < headerLinks.length; i++) {
      //console.log(headerLinks[i].href);

      if (
        headerLinks[i].href.includes(
          "https://orasites-prodapp.cec.ocp.oraclecloud.com"
        )
      ) {
        //console.log("Wrong Link");
        let generateLink = headerLinks[i].href.replace(
          "https://orasites-prodapp.cec.ocp.oraclecloud.com",
          "/site/devo"
        );
        headerLinks[i].href = generateLink;
      }

      //console.log("Header links updated to: /site/devo");
    }
  } else if (headerURL.includes("/sites/preview/devo/") === true) {
    for (var i = 0; i < headerLinks.length; i++) {
      //console.log(headerLinks[i].href);

      if (
        headerLinks[i].href.includes(
          "https://orasites-prodapp.cec.ocp.oraclecloud.com"
        )
      ) {
        //console.log("Wrong Link");
        let generateLink = headerLinks[i].href.replace(
          "https://orasites-prodapp.cec.ocp.oraclecloud.com",
          "/sites/preview/devo"
        );
        headerLinks[i].href = generateLink;
      }
      //console.log("Header links updated to: /sites/preview/devo");
    }
  }
}

window.onresize = window.onload = function () {
  try {
    changeHeaderLinks();
    //console.log("Links changed");
  } catch (e) {
    console.log(e);
  }
  //console.log("Window Width: " + window.innerWidth);
  var tabContent = document.querySelectorAll(".tabs-content");
  var tabs = document.getElementById("a4d4de2d-8c31-40b7-852e-be17ea41dc7a");
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

  //console.log("Window Width: " + window.innerWidth);
  var title = document.querySelectorAll(".section-header");

  if (window.innerWidth <= 767) {
    for (let i = 1; i < title.length; i++) {
      //console.log(title[i]);
      title[i].style.paddingTop = "0rem";
    }
    //console.log("Mobile Headers updated");
  } else {
    for (let i = 1; i < title.length; i++) {
      //console.log(title[i]);
      title[i].style.paddingTop = "5rem";
    }
    //console.log("Desktop Headers updated");
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
      //console.log(image + " ALT updated");
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
