function showMT() {
  //Crosslinking to Free Tier
  //let topNav = document.getElementById("TopNav");
  let topNav = document.getElementById("TopNav");
  let url = location.href;
  let freeBTN = document.querySelector(
    "#bd353c82-50c2-4950-8e31-340a3956aa1fcustomComponentDiv > div > div > div > div.ctas > div > div > a"
  );

  //console.log("Site: " + url);

  if (url.includes("/en/") === true) {
    freeBTN.href = "https://www.oracle.com/cloud/free/";
  } else if (url.includes("/de/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>Diese Seite wurde maschinell übersetzt.</span></div><button type='button' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    freeBTN.href = "https://www.oracle.com/de/cloud/free/";
  } else if (url.includes("/es/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>Esta página ha sido traducida por una máquina.</span></div><button type='button' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    freeBTN.href = "https://www.oracle.com/es/cloud/free/";
  } else if (url.includes("/fr/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>Cette page a été traduite automatiquement.</span></div><button type='button' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    freeBTN.href = "https://www.oracle.com/fr/cloud/free/";
  } else if (url.includes("/it/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>Questa pagina è stata tradotta da una macchina.</span></div><button type='button' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    freeBTN.href = "https://www.oracle.com/it/cloud/free/";
  } else if (url.includes("/ja/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>このページは機械翻訳したものです。</span></div><button type='button' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    freeBTN.href = "https://www.oracle.com/ja/cloud/free/";
  } else if (url.includes("/ko/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>기계로 번역된 페이지입니다.</span></div><button type='button' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    freeBTN.href = "https://www.oracle.com/ko/cloud/free/";
  } else if (url.includes("/pt-BR/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>Esta página foi traduzida automaticamente.</span></div><button type='button' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    freeBTN.href = "https://www.oracle.com/pt-BR/cloud/free/";
  } else if (url.includes("/zh/") === true) {
    //Add Alert
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>此页面内容为机器翻译。</span></div><button type='button' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    freeBTN.href = "https://www.oracle.com/zh/cloud/free/";
  }
}

function addPadding() {
  //Adds Padding according to the presence of Topics
  var article = document.querySelector(".technical-content");
  var hero = document.querySelector(".content-container");
  var topicPresent = article.classList.contains("noTopics");

  //console.log("Topic detected: " + topicPresent);

  if (topicPresent === true) {
    hero.style.width = "66rem";
  } else {
    hero.style.width = "100rem";

    //Sticks Chapters
    //User scrolls the page
    window.onscroll = function () {
      stickChapters();
    };

    // Get the Chapters
    var navbar = document.querySelector(".chapters");

    // Add the sticky class
    function stickChapters() {
      //console.log(window.pageYOffset);
      if (window.pageYOffset >= 190) {
        navbar.classList.add("sticky");
        //console.log("Sticky class added");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    //End -----------------Sticks Chapters
  }
}

function stickNavBar() {
  //Sticks Menu Bar
  let topNav = document.getElementById("TopNav");
  let heroNav = document.getElementById("TechnicalContentHero");

  let translate = topNav.clientHeight;
  //console.log(translate);

  topNav.style.maxWidth = "120rem";

  function stickNavBar(x) {
    if (x.matches) {
      heroNav.style.marginTop = translate + "px";
      //console.log("Hero translated");
      topNav.style.position = "fixed";
    } else {
      heroNav.style.marginTop = "auto";
      topNav.style.position = "sticky";
    }
  }

  var x = window.matchMedia("(max-width: 1999px)");
  stickNavBar(x);
  x.addListener(stickNavBar);

  //End -------------Sticks Menu Bar
}

function removeAria() {
  //Remove Aria Label
  let ariaSocialAnkle = document.querySelector("#social-ankle-title");
  ariaSocialAnkle.removeAttribute("aria-label");
  //console.log("Aria Label for Social Ankle Removed");
}

function addBlank() {
  //Add the Blank attribute to Links
  let links = document.querySelectorAll(".technical-content a");

  for (var i = 0; i < links.length; i++) {
    var link = links[i].getAttribute("href");

    if (!link?.includes("#")) {
      links[i].setAttribute("target", "_blank");
      //console.log(link + " added _blank attribute");
    }
  }
}

window.onload = function () {
  try {
    addPadding();
  } catch (e) {
    console.log(e);
  }

  stickNavBar();
  addBlank();
  removeAria();

  try {
    showMT();
  } catch (e) {
    console.log(e);
  }
};

window.onscroll = function () {
  showMT();
};
