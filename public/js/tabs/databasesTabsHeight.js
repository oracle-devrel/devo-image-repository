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
    let adjustHeight = maxHeight - 80;

    //console.log("Tabs Separation: " + adjustHeight);
    tabs.style.marginBottom = adjustHeight + "px";
  } else {
    tabs.style.marginBottom = "auto";
  }
  
  //Adjusting Paddings

  //console.log("Window Width: " + window.innerWidth);
  var title = document.querySelectorAll(".section-header");

  if (window.innerWidth <= 767) {
    for (let i = 0; i < title.length; i++) {
      //console.log(title[i]);
      title[i].style.paddingTop = "0rem";
    }
    console.log("Mobile Headers updated");
  } else {
    for (let i = 0; i < title.length; i++) {
      //console.log(title[i]);
      title[i].style.paddingTop = "5rem";
    }
    console.log("Desktop Headers updated");
  }
};
