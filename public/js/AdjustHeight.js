window.onresize = window.onload = function () {
    width = this.innerWidth;

    let tabContent = document.querySelectorAll(".tabs-content");

    for (let i = 0; i < tabContent.length; i++) {
        console.log(tabContent[i].clientHeight);
      }



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