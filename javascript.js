"use strict";
const casesId = document.getElementById("data");
const recoveredId = document.getElementById("recovered");
const deathsId = document.getElementById("deaths");

const url = "https://api.covidtracking.com/v1/us/daily.json";
const coviidAPI = function () {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((reponse) => {
        let mydata = reponse[0];
        let cases = mydata.positive;
        let pending = mydata.pending;
        let deaths = mydata.death;
        casesId.innerHTML = cases;
        recoveredId.innerHTML = pending;
        deathsId.innerHTML = deaths;
      });
  } catch (err) {
    throw err;
  }
};
coviidAPI();

const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
