window.onresize = window.onload = function () {
    width = this.innerWidth;

    let tabContent = document.querySelectorAll(".tabs-content");

    let tabs = document.getElementById("a4191c0e-0f8f-42ea-b925-194aaa836030");

    for (let i = 0; i < tabContent.length; i++) {
        console.log(tabContent[i].clientHeight);
      }

      tabs.style.marginBottom = "1000rem";



      /*
    mobileItem.forEach(function (item) {
      if (window.innerWidth <= 1135) {
        closeSearchBar();
        hideItemNavBar(item);
      } else {
        closeSearchBar();
        showItemNavBar(item);
      }
    });
    */



  };