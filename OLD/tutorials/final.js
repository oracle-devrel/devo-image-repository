window.onload = function () {
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
  //console.log("Dev.oracle.com links removed");
};
