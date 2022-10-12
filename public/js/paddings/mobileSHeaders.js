function generateNewLink(prefix, link, location) {
  let generateLink = link.href.replace(location, prefix);
  link.href = generateLink;
}

function changeHeaderLink() {
  //let headerLinks = document.querySelectorAll("#Header a, #Footer a");
  let headerLinks = document.querySelectorAll(".u30 a");
  let domain = "https://orasites-prodapp.cec.ocp.oraclecloud.com";
  let url = location.href;

  for (var i = 0; i < headerLinks.length; i++) {
    if (headerLinks[i].href.includes(domain)) {
      if (url.includes("/de/") === true) {
        generateNewLink("/de", headerLinks[i], domain);
      } else if (url.includes("/es/") === true) {
        generateNewLink("/es", headerLinks[i], domain);
      } else if (url.includes("/fr/") === true) {
        generateNewLink("/fr", headerLinks[i], domain);
      } else if (url.includes("/it/") === true) {
        generateNewLink("/it", headerLinks[i], domain);
      } else if (url.includes("/ja/") === true) {
        generateNewLink("/ja", headerLinks[i], domain);
      } else if (url.includes("/ko/") === true) {
        generateNewLink("/ko", headerLinks[i], domain);
      } else if (url.includes("/pt-BR/") === true) {
        generateNewLink("/pt-BR", headerLinks[i], domain);
      } else if (url.includes("/zh/") === true) {
        generateNewLink("/zh", headerLinks[i], domain);
      } else if (url.includes("/zh-TW/") === true) {
        generateNewLink("/zh-TW", headerLinks[i], domain);
      }
    }
  }
}

//window.onresize = window.onload = function () {
window.onload = function () {
  var title = document.querySelectorAll(".section-header");

  if (window.innerWidth <= 767) {
    for (let i = 1; i < title.length; i++) {
      title[i].style.paddingTop = "0rem";
    }
  } else {
    for (let i = 1; i < title.length; i++) {
      title[i].style.paddingTop = "5rem";
    }
  }

  try {
    changeHeaderLink();
  } catch (e) {
    console.error(e);
    console.log("Links not updated");
  }
};

/* 

  //Update missing links
  let invisibleLinks = document.querySelectorAll("a");
  for (var i = 0; i < invisibleLinks.length; i++) {
    var invLink = invisibleLinks[i].getAttribute("href");
    //console.log(invisibleLinks[i]);
    //console.log(invisibleLinks[i].href)

    if (invLink == null) {
      invisibleLinks[i].setAttribute("href", "#");
      //console.log("LINK UPDATED TO #");
    }
    //console.log(invisibleLinks[i].href)
    //console.log(invisibleLinks[i]);
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

   //For Tutorials page: Parse Links to work JUST ON PREVIEW
  let url = location.href;

  if (url.includes("/dev-tutorials.html") === true) {
    devTutorialsLinks = document.querySelectorAll(".col-section a");

    for (var i = 0; i < devTutorialsLinks.length; i++) {
      if (devTutorialsLinks[i].href.includes("https://developer.oracle.com")) {
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
      }
    }
  }

*/
