window.onload = function () {
  let altImage = document.querySelectorAll("img");

  for (var i = 0; i < altImage.length; i++) {
    var image = altImage[i].getAttribute("alt");
    //console.log(image)

    if (image == null) {
      altImage[i].setAttribute("alt", " ");
      console.log(image + " ALT updated");
    }
  }
};
