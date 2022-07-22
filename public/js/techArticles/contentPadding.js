window.onload = function () {
  var article = document.querySelector(".technical-content");
  var hero = document.querySelector(".content-container");
  var topicPresent = article.classList.contains("noTopics");

  console.log(topicPresent);

  if (topicPresent === true) {
    hero.style.width = "66rem";
  } else {
    hero.style.width = "100rem";
  }
};
