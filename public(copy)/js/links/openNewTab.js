window.onload = function () {
  let links = document.querySelectorAll("#TechnicalContent a");

  for (var i = 0; i < links.length; i++) {
    var link = links[i].getAttribute("href");

    if (link != "#copy" || link == null) {
      links[i].setAttribute("target", "_blank");
      console.log(link + " added _blank attribute");
    }
  }
};
