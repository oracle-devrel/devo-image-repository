window.onload = function () {
  document.getElementById("dmbutton").addEventListener("click", function () {
    const css = document.getElementById("cssCSTheme");
    const dmb = document.getElementById("dmbutton");

    if (dmb.innerHTML == "Dark Mode") {
      css.setAttribute(
        "href",
        "https://oracle-devrel.github.io/devo-image-repository/public/css/cheatSheets/styleDark.css"
      );
      dmb.innerHTML = "Light Mode";
    } else {
      css.setAttribute(
        "href",
        "https://oracle-devrel.github.io/devo-image-repository/public/css/cheatSheets/style.css"
      );
      dmb.innerHTML = "Dark Mode";
    }
  });
};
