window.onresize = window.onload = function () {
  //console.log("Window Width: " + window.innerWidth);
  var tabContent = document.querySelectorAll(".tabs-content");
  var tabs = document.getElementById("a4191c0e-0f8f-42ea-b925-194aaa836030");
  var heightList = [];

  document.addEventListener("click", function (event) {
    var isClickInsideElement = tabs.contains(event.target);
    if (!isClickInsideElement) {
      //Do something click is outside specified element
      console.log("Click Fuera");
    }
  });
  

  if (window.innerWidth <= 767) {
    for (let i = 0; i < tabContent.length; i++) {
      heightList.push(tabContent[i].clientHeight);
    }
    var maxHeight = Math.max(...heightList);
    let adjustHeight = maxHeight - 80;

    console.log("Tabs Separation: " + adjustHeight);
    tabs.style.marginBottom = adjustHeight + "px";
  } else {
    tabs.style.marginBottom = "auto";
  }
};
