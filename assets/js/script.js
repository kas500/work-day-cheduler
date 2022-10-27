//get current day info
var today = moment();

//Hook DOM
var divContainer = $(".container");

// display current date
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// Create work hours array
var workHours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

var divRow = $("<div>", {"class": "row"});
divContainer.append(divRow);

$.each(workHours, function(index, el){
    console.log(el);
});