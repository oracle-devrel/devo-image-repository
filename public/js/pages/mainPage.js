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
      }
    }
  }
}

window.onload = function () {
  try {
    changeHeaderLink();
  } catch (e) {
    console.error(e);
    console.log("Links not updated");
  }
};
