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

export default changeHeaderLinks();
