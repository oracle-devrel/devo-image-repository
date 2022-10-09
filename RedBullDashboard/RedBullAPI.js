function callResults() {
  //fetch("https://jsonplaceholder.typicode.com/users")
  fetch(
    "https://g2f4dc3e5463897-ocwredbull.adb.us-phoenix-1.oraclecloudapps.com/ords/ocw2022/redbull/"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.items.forEach((test) => {
        //const markup = `<li class="newScore">${test.name}</li>`;
        //document.querySelector(".Names").insertAdjacentHTML("beforeend", markup);
        //console.log(test)

        const pos = `<td class="newScore">${test.pos}</td>`;
        const name = `<td class="newScore">${test.name}</td>`;
        const sector1 = `<td class="gray newScore">${test.sector1}</td>`;
        const sector2 = `<td class="gray newScore">${test.sector2}</td>`;
        const sector3 = `<td class="gray newScore">${test.sector3}</td>`;
        const lapt = `<td class="strong newScore">${test.lapt}</td>`;
        const gap = `<td class="gapRED newScore">${test.gap}</td>`;

        document
          .querySelector(".maxVerScore-Table")
          .insertAdjacentHTML(
            "afterend",
            "<tr class='newScore'>" +
              pos +
              name +
              sector1 +
              sector2 +
              sector3 +
              lapt +
              gap +
              "</tr>"
          );
      });
      adjustHeight();
    })

    .catch((error) => {
      console.log(error);
      console.log("API request failed");
    });
}

function deleteScores() {
  const pastScores = document.querySelectorAll(".newScore");
  for (let i = 0; i < pastScores.length; i++) {
    pastScores[i].remove();
  }
}

function adjustHeight() {
  var heightTable = document.querySelector(".redTable");
  console.log(heightTable.clientHeight);
  var containerNewHeight = document.querySelector(".tableScores");
  var finalHeight = heightTable.clientHeight + 48;
  containerNewHeight.style.minHeight = finalHeight + "px";
}

try {
  callResults();

  setInterval(function () {
    deleteScores();
    callResults();

    console.log("Scores Updated");
  }, 10000);
} catch (e) {
  console.log("Not able to Fetch Data");
}
