//get current day info
var today = moment();
var colorTime="";
//Hook DOM
var $divContainer = $(".container");

// display current date
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// Create work hours array
var workHours = ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM",
"11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"];

//curent time variable (formatted am/pm)
var currentTime = (moment().format("hA"));

var indexOfCurrentTime = workHours.indexOf(currentTime);

//generate content for div container
$.each(workHours, function(index, hour){
    colorTime = (index<indexOfCurrentTime)?"past":(index>indexOfCurrentTime)?"future":"present";
    var $divRow = $("<div>", {"class": "row time-block"});
    $divRow.append($("<div>",{"class": "hour col-1 text-right pr-0 d-flex justify-content-end align-items-center"}).text(hour));
    $divRow.append($("<textarea>",{"class": "col-10 "+colorTime+" text-left description"}));
    $divRow.append($("<div>",{"class": "col-1 align-item-center d-flex justify-content-center align-items-center saveBtn"})
    .append($("<i>", {"class": "fa fa-save my-4"})));
    $divContainer.append($divRow);
});