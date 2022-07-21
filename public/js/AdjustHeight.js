window.onresize = window.onload = function () {
  //console.log("Window Width: " + window.innerWidth);
  var tabContent = document.querySelectorAll(".tabs-content");
  var tabs = document.getElementById("a4191c0e-0f8f-42ea-b925-194aaa836030");
  var heightList = [];

  if (window.innerWidth <= 767) {
    for (let i = 0; i < tabContent.length; i++) {
      heightList.push(tabContent[i].clientHeight);
    }
    var maxHeight = Math.max(...heightList);
    let adjustHeight = maxHeight - 171;

    console.log("Tabs Separation: " + adjustHeight)
    tabs.style.marginBottom = adjustHeight + "px";

  } else {
    tabs.style.marginBottom = "auto";
  }
};
