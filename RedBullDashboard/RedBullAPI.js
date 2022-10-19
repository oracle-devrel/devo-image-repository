function callResults() {
  //fetch("https://jsonplaceholder.typicode.com/users")
  fetch(
    "https://gc3dd18cc561e12-f1db.adb.us-phoenix-1.oraclecloudapps.com/ords/livelapsar/ocw22_drivers_valid_laps/"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.items.forEach((redScore) => {
        //const markup = `<li class="newScore">${redScore.name}</li>`;
        //document.querySelector(".Names").insertAdjacentHTML("beforeend", markup);
        //console.log(redScore)

        let pos = `<td class="newScore">${redScore.rank}</td>`;
        let name = `<td class="newScore">${redScore.driver}</td>`;
        let sector1 = `<td class="gray newScore">${redScore.s1}</td>`;
        let sector2 = `<td class="gray newScore">${redScore.s2}</td>`;
        let sector3 = `<td class="gray newScore">${redScore.s3}</td>`;
        let lapt = `<td class="strong newScore">${redScore.lap_time_dsp}</td>`;
        let gap = `<td class="gapRED newScore">${redScore.gap}</td>`;

        if (redScore.rank == "2") {
          document.getElementById("compLapTime").innerHTML = lapt;
          document.getElementById("compLapDifTime").innerHTML = gap;
          document.getElementById("compLapName").innerHTML = name;
        }

        document
          .querySelector(".maxVerScore-Table")
          .insertAdjacentHTML(
            "beforebegin",
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
