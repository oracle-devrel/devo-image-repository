window.onresize = window.onload = function () {
  width = this.innerWidth;

  console.log("Window Widht: " + width);

  let tabContent = document.querySelectorAll(".tabs-content");
  let tabs = document.getElementById("a4191c0e-0f8f-42ea-b925-194aaa836030");
  var heightList = [];

  if (window.innerWidth <= 768) {
    for (let i = 0; i < tabContent.length; i++) {
      heightList.push(tabContent[i].clientHeight);
    }
    var maxHeight = Math.max(...heightList);
    tabs.style.marginBottom = maxHeight + "px";
  }
};
