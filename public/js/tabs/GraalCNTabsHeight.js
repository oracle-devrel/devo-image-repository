window.onresize = window.onload = function () {
  //console.log("Window Width: " + window.innerWidth);
  var tabContent = document.querySelectorAll(".tabs-content");
  var tabs = document.getElementById("a4d4de2d-8c31-40b7-852e-be17ea41dc7a");
  var heightList = [];

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
