//get current day info
var today = moment();
var colorTime="";
//Hook DOM
var $divContainer = $(".container");

// display current date
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// Create work hours array
var workHours = ["0AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM",
"11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"];
var currentTime = (moment().format("hA"));
var indexOfCurrentTime = workHours.indexOf(currentTime);
$.each(workHours, function(index, hour){
    colorTime = (index<indexOfCurrentTime)?"past":(index>indexOfCurrentTime)?"future":"present";
    var $divRow = $("<div>", {"class": "row time-block"});
    $divRow.append($("<div>",{"class": "col-1 d-flex align-items-center text-right hours"}).text(hour));
    $divRow.append($("<div>",{"class": "textarea "+colorTime+" col-10 text-left description "}));
    $divRow.append($("<div>",{"class": "col-1 d-flex align-items-center p-4 saveBtn"}).append($("<i>", {"class": "fa fa-save"})));
    $divContainer.append($divRow);
});