//get current day info
var today = moment();
var colorTime="";

//array of events
var tasksArr = [];

//Hook DOM
var $divContainer = $(".container");

// display current date
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

//curent time variable (formatted am/pm)
var currentTime = (moment().format("hA"));

// Create work hours array
var workHours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"];

//index of current time element from the workHours array
var indexOfCurrentTime = workHours.indexOf(currentTime);

//create element to display save message
var $saveMessage = $("<h6>",{"class": "text-center d-none"});
$saveMessage.html("Task saved to <span class='text-success'>local storge </span><span class='text-warning'>&#10003</span>");
$divContainer.append($saveMessage);

//generate content for div container
$.each(workHours, function(index, hour){
    colorTime = (index<indexOfCurrentTime)?"past":(index>indexOfCurrentTime)?"future":"present";
    var $divRow = $("<div>", {"class": "row time-block"});
    $divRow.append($("<div>",{"class": "hour col-1 text-right pr-0 d-flex justify-content-end align-items-center"}).text(hour));
    $divRow.append($("<textarea>",{"class": "col-10 "+colorTime+" text-left description text-dark", "id" : index})
    .val(getDatafromLocStorage(index)!==null?getDatafromLocStorage(index):""));
    $divRow.append($("<div>",{"class": "col-1 align-item-center d-flex justify-content-center align-items-center saveBtn"})
    .append($("<i>", {"class": "fa fa-save my-4"})));
    $divContainer.append($divRow);
});

// change save icon color, show message by click and save to local storage
$("i").click(function(ev){
    var taskEl = {
        id: $(ev.currentTarget).parent().prev().attr("id"),
        text: $(ev.currentTarget).parent().prev().val()
    }
    
    addToLocalStorage(taskEl);

    ev.currentTarget.style.color = "black";
    $saveMessage.addClass("d-block");
    setTimeout(function() {
        ev.currentTarget.style.color = "white"; 
        $saveMessage.removeClass("d-block");
      }, 400)
        
});

//get data from local storage
function getDatafromLocStorage(index){
    var tasksArr = JSON.parse(localStorage.getItem("tasks"));
        
    if(tasksArr !== null){
        if(tasksArr.some(obj => parseInt(obj.id) === index)){
            return tasksArr.find(obj => parseInt(obj.id) === index).text;
        }
    } else return "";
        
}

//add data to local storage
function addToLocalStorage(taskEl){
    tasksArr = (JSON.parse(localStorage.getItem("tasks")) != null) ? JSON.parse(localStorage.getItem("tasks")):[];
    if((tasksArr.some(obj => obj.id === taskEl.id))){
        tasksArr.find(obj => obj.id === taskEl.id).text = taskEl.text; 
     }
     else {
        tasksArr.push(taskEl);
     }
      
    localStorage.setItem("tasks",JSON.stringify(tasksArr));
}