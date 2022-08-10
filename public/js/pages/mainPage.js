function changeHeaderLinks() {
  //Update Header Links: Add Prefix to flowless navigation
  let headerLinks = document.querySelectorAll("#Header a");
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

      console.log("Header links updated to: /site/devo");
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
      console.log("Header links updated to: /sites/preview/devo");
    }
  }
}

window.onload = function () {
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

  //Accesibility Corrections: u10btn
  let missingBTNsu10 = document.querySelectorAll(".u10btn");
  for (var i = 0; i < missingBTNsu10.length; i++) {
    missingBTNsu10[i].setAttribute("aria-label", "Footer button with no action");
    missingBTNsu10[i].role = "button"
    console.log(missingBTNsu10[i])
  }


  //Remove Aria Label
  let ariaSocialAnkle = document.querySelector("#social-ankle-title");
  ariaSocialAnkle.removeAttribute("aria-label");
  console.log("Aria Label for Social Ankle Removed");

  let closeNavBTN = document.querySelectorAll(".u30navw3 .close");

  for (var i = 0; i < closeNavBTN.length; i++) {
    closeNavBTN[i].setAttribute("data-lbl", "close");
    //console.log(closeNavBTN[i]);
  }
  console.log("Close BTN-ARIA updated");
};
