function showMT() {
  //Crosslinking to Free Tier
  //let topNav = document.getElementById("TopNav");
  let topNav = document.getElementById("TopNav");
  let url = location.href;
  let linksBread = document.querySelectorAll(".breadcrumbs a");
  let freeBTN = document.querySelector(
    "#bd353c82-50c2-4950-8e31-340a3956aa1fcustomComponentDiv > div > div > div > div.ctas > div > div > a"
  );

  //console.log("Site: " + url);
  for (var i = 0; i < linksBread.length; i++) {
    if (url.includes("/en/") === true) {
      linksBread[i].href = "/site/devo/";
    } else if (url.includes("/de/") === true) {
      linksBread[i].href = "/site/devo/de/index.html";
    } else if (url.includes("/es/") === true) {
      linksBread[i].href = "/site/devo/es";
    } else if (url.includes("/fr/") === true) {
      linksBread[i].href = "/site/devo/fr";
    } else if (url.includes("/it/") === true) {
      linksBread[i].href = "/site/devo/it";
    } else if (url.includes("/ja/") === true) {
      linksBread[i].href = "/site/devo/ja";
    } else if (url.includes("/ko/") === true) {
      linksBread[i].href = "/site/devo/ko";
    } else if (url.includes("/pt-BR/") === true) {
      linksBread[i].href = "/site/devo/pt-BR";
    } else if (url.includes("/zh/") === true) {
      linksBread[i].href = "/site/devo/zh";
    }
  }

  if (url.includes("/en/") === true) {
    //freeBTN.href = "https://www.oracle.com/cloud/free/";
  } else if (url.includes("/de/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>Diese Seite wurde maschinell übersetzt.</span></div><button type='button' id='closeMTalert' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    //freeBTN.href = "https://www.oracle.com/de/cloud/free/";
  } else if (url.includes("/es/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>Esta página ha sido traducida por una máquina.</span></div><button type='button' id='closeMTalert' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    //freeBTN.href = "https://www.oracle.com/es/cloud/free/";
  } else if (url.includes("/fr/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>Cette page a été traduite automatiquement.</span></div><button type='button' id='closeMTalert' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    //freeBTN.href = "https://www.oracle.com/fr/cloud/free/";
  } else if (url.includes("/it/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>Questa pagina è stata tradotta da una macchina.</span></div><button type='button' id='closeMTalert' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    //freeBTN.href = "https://www.oracle.com/it/cloud/free/";
  } else if (url.includes("/ja/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>このページは機械翻訳したものです。</span></div><button type='button' id='closeMTalert' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    //freeBTN.href = "https://www.oracle.com/ja/cloud/free/";
  } else if (url.includes("/ko/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>기계로 번역된 페이지입니다.</span></div><button type='button' id='closeMTalert' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    //freeBTN.href = "https://www.oracle.com/ko/cloud/free/";
  } else if (url.includes("/pt-BR/") === true) {
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>Esta página foi traduzida automaticamente.</span></div><button type='button' id='closeMTalert' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    //freeBTN.href = "https://www.oracle.com/pt-BR/cloud/free/";
  } else if (
    url.includes("/zh/") === true ||
    url.includes("/zh-TW/") === true
  ) {
    //Add Alert
    topNav.insertAdjacentHTML(
      "afterend",
      "<div class='machineTranslated' id='MachineTranslated' style='z-index: 900; top: 100px;' data-pageid='160'><div class='alert machine-translation-disclaimer' data-trackas='alert'><div class='content-wrapper'><div class='text-content'><span class='text'>此页面内容为机器翻译。</span></div><button type='button' id='closeMTalert' title='Close Alert' class='close'><svg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L11 11M21 21L11 11M11 11L21 1M11 11L1 21' stroke='white' stroke-width='2'></path></svg></button></div></div></div>"
    );
    //freeBTN.href = "https://www.oracle.com/zh/cloud/free/";
  }

  let MTbtn = document.getElementById("closeMTalert");
  MTbtn.addEventListener("click", function () {
    let alert = document.getElementById("MachineTranslated");
    alert.remove();
  });
}

function changeBanner() {
  let url = location.href;
  let backgroundLink = document.querySelectorAll(".bg-image");

  if (url.includes("/tutorials/") === true) {
    backgroundLink[0].style.backgroundImage =
      "url('https://orasites-prodapp.cec.ocp.oraclecloud.com/content/management/api/v1.1/assets/CONT00986721E0F746E487B0A45F4506CD9D/native')";
  }
  if (url.includes("/learn/technical-articles/") === true) {
    backgroundLink[0].style.backgroundImage =
      "url('https://orasites-prodapp.ocecdn.oraclecloud.com/content/published/api/v1.1/assets/CONT4F1D9901A1D44123905E42AFC6F34E4C/native?cb=_cache_9fa4&channelToken=adb55f7fd96e4d78a95fb208a253216b')";
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

  let closeNavBTN = document.querySelectorAll(".u30navw3 .close");

  for (var i = 0; i < closeNavBTN.length; i++) {
    closeNavBTN[i].setAttribute("data-lbl", "close");
    //console.log(closeNavBTN[i]);
  }

  //Update missing links
  let invisibleLinks = document.querySelectorAll("a");
  for (var i = 0; i < invisibleLinks.length; i++) {
    var invLink = invisibleLinks[i].getAttribute("href");
    //console.log(invisibleLinks[i]);
    //console.log(invisibleLinks[i].href)

    if (invLink == null) {
      invisibleLinks[i].setAttribute("href", "#");
      //console.log("LINK UPDATED TO #");
    }
    //console.log(invisibleLinks[i].href)
    //console.log(invisibleLinks[i]);
  }
}

function changeHeaderLinks() {
  //Update Header Links: Add Prefix to flowless navigation
  let headerLinks = document.querySelectorAll("#Header a");
  let headerURL = location.href;

  if (headerURL.includes("/site/devo/") === true) {
    for (var i = 0; i < headerLinks.length; i++) {
      //console.log(headerLinks[i].href);

      if (headerLinks[i].href.includes("")) {
        //console.log("Wrong Link");
        let generateLink = headerLinks[i].href.replace("", "/site/devo");
        headerLinks[i].href = generateLink;
      }

      //console.log("Header links updated to: /site/devo");
    }
  } else if (headerURL.includes("/sites/preview/devo/") === true) {
    for (var i = 0; i < headerLinks.length; i++) {
      //console.log(headerLinks[i].href);

      if (headerLinks[i].href.includes("")) {
        //console.log("Wrong Link");
        let generateLink = headerLinks[i].href.replace(
          "",
          "/sites/preview/devo"
        );
        headerLinks[i].href = generateLink;
      }
      //console.log("Header links updated to: /sites/preview/devo");
    }
  }
}

function altImages() {
  //Add ALT to missing images or Icons
  let altImage = document.querySelectorAll("img");

  for (var i = 0; i < altImage.length; i++) {
    var image = altImage[i].getAttribute("alt");
    //console.log(image)

    if (image == null) {
      altImage[i].setAttribute("alt", "Developer Resource Center Icon");
      //console.log(image + " ALT updated");
    }
  }
}

function updateFooterLinks() {
  //Update missing links
  let invisibleLinks = document.querySelectorAll("a");
  for (var i = 0; i < invisibleLinks.length; i++) {
    var invLink = invisibleLinks[i].getAttribute("href");
    //console.log(invisibleLinks[i]);
    //console.log(invisibleLinks[i].href)

    if (invLink == null) {
      invisibleLinks[i].setAttribute("href", "#");
      //console.log("LINK UPDATED TO #");
    }
    //console.log(invisibleLinks[i].href)
    //console.log(invisibleLinks[i]);
  }

  //Accesibility Corrections: u10btn
  let missingBTNsu10 = document.querySelectorAll(".u10btn");
  for (var i = 0; i < missingBTNsu10.length; i++) {
    missingBTNsu10[i].role = "button";
    missingBTNsu10[i].setAttribute(
      "aria-label",
      "Footer button with no action"
    );
    //console.log(missingBTNsu10[i]);
  }
}

function addCopyBTN() {
  var oCode = document.querySelectorAll(".highlight");
  let url = location.href;

  if (url.includes("/tutorials/") === true) {
    for (var i = 0; i < oCode.length; i = i + 2) {
      oCode[i].insertAdjacentHTML(
        "afterbegin",
        '<div class="ocode-bttn" data-error="Error: Could not Copy" data-success="Copied to Clipboard"><div><a href="#copy">Copy</a></div></div>'
      );
    }
  }
}

window.onload = function () {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function reloadDEVO() {
    await sleep(3000);
    try {
      addPadding();
      console.log("Padding added");
    } catch (e) {
      console.log(e);
      //reloadDEVO();
      //window.location.reload();
    }

    let url = location.href;
    if (url.includes("/en/") === false) {
      try {
        changeBanner();
        console.log("Banner changed");
      } catch (e) {
        console.log(e);
        //reloadDEVO();
      }
    }
  }

  try {
    addPadding();
    console.log("Padding added");
  } catch (e) {
    console.log(e);
    reloadDEVO();
    //window.location.reload();
  }

  try {
    stickNavBar();
    console.log("Nav Bar Sticked");
  } catch (e) {
    console.log(e);
    //window.location.reload();
  }

  try {
    addBlank();
    console.log("Links updated");
  } catch (e) {
    console.log(e);
  }

  try {
    removeAria();
    console.log("Aria removed");
  } catch (e) {
    console.log(e);
  }

  try {
    altImages();
    console.log("ALT images updates");
  } catch (e) {
    console.log(e);
  }

  try {
    showMT();
    console.log("MT updated");
  } catch (e) {
    console.log(e);
  }

  try {
    updateFooterLinks();
    console.log("Footer Links updated");
  } catch (e) {
    console.log(e);
  }

  try {
    addCopyBTN();
    console.log("Copy BTN added");
  } catch (e) {
    console.log(e);
  }

  let url = location.href;

  if (url.includes("/en/") === false) {
    try {
      changeBanner();
      console.log("Banner changed");
    } catch (e) {
      console.log(e);
      reloadDEVO();
    }
  }
};
