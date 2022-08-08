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

    if (image == null) {
      altImage[i].setAttribute("alt", " ");
      console.log(image + " ALT updated");
    }
  }

  //Remove Aria Label
  let ariaSocialAnkle = document.querySelector("#social-ankle-title");
  ariaSocialAnkle.removeAttribute("aria-label");
  console.log("Aria Label for Social Ankle Removed");

  let closeNavBTN = document.querySelector(
    "#u30navw1 > ul > li > div > div > button"
  );
  closeNavBTN.setAttribute("data-lbl", "close");

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
};
