
//get current day info
var today = moment();

//hook DOM
var pElcurrentDate = document.querySelector("#currentDay");

// display current date
pElcurrentDate.textContent = today.format("dddd, MMMM Do YYYY");
