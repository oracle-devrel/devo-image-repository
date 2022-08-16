window.onresize = window.onload = function () {
  //console.log("Window Width: " + window.innerWidth);
  var title = document.querySelectorAll(".section-header");

  if (window.innerWidth <= 767) {
    for (let i = 1; i < title.length; i++) {
      //console.log(title[i]);
      title[i].style.paddingTop = "0rem";
    }
    console.log("Mobile Headers updated");
  } else {
    for (let i = 1; i < title.length; i++) {
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

  //Remove Aria Label
  let ariaSocialAnkle = document.querySelector("#social-ankle-title");
  ariaSocialAnkle.removeAttribute("aria-label");
  console.log("Aria Label for Social Ankle Removed");

  let closeNavBTN = document.querySelectorAll(".u30navw3 .close");

  for (var i = 0; i < closeNavBTN.length; i++) {
    closeNavBTN[i].setAttribute("data-lbl", "close");
    console.log(closeNavBTN[i]);
  }

  //For Tutorials page:
  let url = location.href;

  if (url.includes("/dev-tutorials.html") === true) {
    devTutorialsLinks = document.querySelectorAll(".col-section a");

    for (var i = 0; i < devTutorialsLinks.length; i++) {
      //console.log(devTutorialsLinks[i]);
      if (devTutorialsLinks[i].href.includes("https://developer.oracle.com")) {
        //console.log('DEVO origin included');

        let generateLink = devTutorialsLinks[i].href.replace(
          "https://developer.oracle.com/tutorials/",
          "/site/devo/tutorials/"
        );

        let newLink = generateLink.slice(0, -1);

        if (newLink.includes("/steampipe/")) {
          devTutorialsLinks[i].href = newLink.replace("/steampipe", "");
        } else if (newLink.includes("/oci-iac-framework/")) {
          devTutorialsLinks[i].href = newLink.replace("/oci-iac-framework", "");
        } else if (newLink.includes("/tf-101/")) {
          devTutorialsLinks[i].href = newLink.replace("/tf-101", "");
        } else if (newLink.includes("/multi-cluster-verrazzano-oke/")) {
          devTutorialsLinks[i].href = newLink.replace(
            "/multi-cluster-verrazzano-oke",
            ""
          );
        } else {
          devTutorialsLinks[i].href = newLink;
        }
        //console.log(devTutorialsLinks[i]);
      }
    }
    console.log("Dev.oracle.com links removed");
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
