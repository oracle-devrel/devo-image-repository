window.onload = function () {
  var article = document.querySelector(".technical-content");
  var hero = document.querySelector(".content-container");
  var topicPresent = article.classList.contains("noTopics");

  console.log(topicPresent);

  if (topicPresent = "true") {
    console.log("New Width: 66rem");
    hero.style.width = "66rem";
  } else {
    console.log("New Width: 100rem");
    hero.style.width = "100rem";
  }

};
