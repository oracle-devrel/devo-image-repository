/*CrownPeak and Lighthouse reports mark two important points:
Missing ALT IMAGES and non-explicit height and width.

*/
let altImage = document.querySelectorAll("img");
for (var i = 0; i < altImage.length; i++) {
  var image = altImage[i].getAttribute("alt");
  if (image == null) {
    altImage[i].setAttribute("alt", "Developer Resource Center Icon");
    //console.log(image + " ALT updated");
  }
}

//Lighthouse points some missing references. Also on the compiler, we should force that all links have the Default reference.
//Update missing links
let invisibleLinks = document.querySelectorAll("a");
for (var i = 0; i < invisibleLinks.length; i++) {
  var invLink = invisibleLinks[i].getAttribute("href");
  if (invLink == null) {
    invisibleLinks[i].setAttribute("href", "#");
  }
}
