// TARGET HTML ELEMENTS
const dateContainer = $("#currentDay");
const timeBlockContainer = $(".container");
const currentHour = moment().hour();
console.log(currentHour);

// render date and time display
const onReady = function () {
  const timerTick = function () {
    const dateTime = moment();
    const dateTimeFormatted = dateTime.format("dddd, MMM Do YYYY, h:mm a");

    dateContainer.text(dateTimeFormatted);
  };
  const timer = setInterval(timerTick, 1000);
};

//  get from local storage
//   set key/value pairs into an array?

// render timeblocks and text content (forEach through LS array to set content?)
const renderTimeBlocks = function () {
  const timeBlock = $(
    '<h2 class="hour"><span id="spanHour">14</span>:00</h2><textarea class="" name="" id="" cols="30" rows="1"></textarea><button class="saveBtn" type="submit" data-save="" >Save</button> <h2 class="hour"><span id="spanHour">10</span>:00</h2><textarea class="" name="" id="" cols="30" rows="1"></textarea><button class="saveBtn" type ="submit" data-save="" >Save</button>'
  );
  //   loop through key/value pairs to assign content:
  //        spanHour=key
  //        textarea id=key
  //        textarea content=value
  //        saveBtn data-save=key

  // append to main container
  timeBlockContainer.append(timeBlock);

  // get text of time blocks hours
  const timeBlockHour = $("#spanHour").text();
  console.log(timeBlockHour);
  if (timeBlockHour == currentHour) {
    console.log("Event is now!");
  }
};

const setStyles = function () {
  // if timeBlockHour.text === currentHour then set class to present
  if (timeBlockHour == currentHour) {
    console.log("Event is now!");
    // if timeBlockHour.text < currentHour then set class to past
  } else if (timeBlockHour < currentHour) {
    // if timeBlockHour.text > currentHour then set class to future
  } else {
  }
};

// on save click handler
const saveEvent = function (event) {
  //   declare timeBlockContainer current target
  const currentTarget = event.currentTarget;
  // declare .saveBtn target
  const target = event.target;

  const userClicked = $(target).attr("data-save");

  // LOCAL STORAGE
  //   get textarea input value (event details)
  let eventDetails = $(target).prev().val();

  //   set to LS
};

// click event on save button (use target and event capturing)
$(timeBlockContainer).on("click", saveEvent);
$(document).ready(onReady);
$(document).ready(renderTimeBlocks);
