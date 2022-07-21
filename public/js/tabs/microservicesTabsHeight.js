window.onresize = window.onload = function () {
  console.log("Window Width: " + window.innerWidth);
  var tabContent = document.querySelectorAll(".tabs-content");
  var tabs = document.getElementById("fa4035f6-6d8a-46ea-9d6f-efe23ddb2075");
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
