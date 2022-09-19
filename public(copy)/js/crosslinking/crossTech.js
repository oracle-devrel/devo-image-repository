window.onload = function () {
  let url = location.href;
  let freeBTN = document.querySelector(
    "#bd353c82-50c2-4950-8e31-340a3956aa1fcustomComponentDiv > div > div > div > div.ctas > div > div > a"
  );

  console.log(url);

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
