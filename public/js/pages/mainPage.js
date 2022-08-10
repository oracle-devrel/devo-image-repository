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
