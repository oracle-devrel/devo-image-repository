window.onload = function () {
  //Adds Padding according to the presence of Topics
  var article = document.querySelector(".technical-content");
  var hero = document.querySelector(".content-container");
  var topicPresent = article.classList.contains("noTopics");

  console.log("Topic detected: " + topicPresent);

  if (topicPresent === true) {
    hero.style.width = "66rem";
  } else {
    hero.style.width = "100rem";
  }

  //Add the Blank attribute to Links
  let links = document.querySelectorAll("#TechnicalContent a");

  for (var i = 0; i < links.length; i++) {
    var link = links[i].getAttribute("href");

    if (link != "#copy" || link == null) {
      links[i].setAttribute("target", "_blank");
      console.log(link + " added _blank attribute");
    }
  }

  //Crosslinking to Free Tier
  let url = location.href;
  let freeBTN = document.querySelector(
    "#bd353c82-50c2-4950-8e31-340a3956aa1fcustomComponentDiv > div > div > div > div.ctas > div > div > a"
  );

  console.log("Site: " + url);

  if (url.includes("/en/") === true) {
    freeBTN.href = "https://www.oracle.com/cloud/free/";
  } else if (url.includes("/de/") === true) {
    freeBTN.href = "https://www.oracle.com/de/cloud/free/";
  } else if (url.includes("/es/") === true) {
    freeBTN.href = "https://www.oracle.com/es/cloud/free/";
  } else if (url.includes("/fr/") === true) {
    freeBTN.href = "https://www.oracle.com/fr/cloud/free/";
  } else if (url.includes("/it/") === true) {
    freeBTN.href = "https://www.oracle.com/it/cloud/free/";
  } else if (url.includes("/ja/") === true) {
    freeBTN.href = "https://www.oracle.com/ja/cloud/free/";
  } else if (url.includes("/ko/") === true) {
    freeBTN.href = "https://www.oracle.com/ko/cloud/free/";
  } else if (url.includes("/pt-BR/") === true) {
    freeBTN.href = "https://www.oracle.com/pt-BR/cloud/free/";
  } else if (url.includes("/zh/") === true) {
    freeBTN.href = "https://www.oracle.com/zh/cloud/free/";
  }
};
