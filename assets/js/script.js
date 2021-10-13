// TARGET HTML ELEMENTS
const dateContainer = $("#currentDay");
const timeContainer = $("#currentTime");
const timeBlockContainer = $(".container");
const currentHour = moment().hour();

// render date and time display
const renderDateTime = function () {
  const timerTick = function () {
    const dateTime = moment();
    const dateTimeFormatted = dateTime.format("dddd, MMM Do YYYY");
    const timeFormatted = dateTime.format("k:mm a");

    dateContainer.text(dateTimeFormatted);
    timeContainer.text(timeFormatted);
  };
  const timer = setInterval(timerTick, 1000);
};

//  get from local storage
//   set key/value pairs into an array?

// render timeblocks and text content (forEach through LS array to set content?)
const renderTimeBlocks = function () {
  const timeBlock = $(
    '<h2 class="hour"><span id="spanHour">14</span>:00</h2><textarea class="past" name="" id="" cols="30" rows="1"></textarea><button class="saveBtn" type="submit" data-save="14" >Save</button> <h2 class="hour"><span id="spanHour">10</span>:00</h2><textarea class="past" name="" id="" cols="30" rows="1"></textarea><button class="saveBtn" type ="submit" data-save="10" >Save</button>'
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

  const setStyles = function () {
    // if timeBlockHour.text === currentHour then set class to present
    if (timeBlockHour == currentHour) {
      console.log("Event is now!");
      // if timeBlockHour.text < currentHour then set class to past
    } else if (timeBlockHour < currentHour) {
      console.log("event is past");

      // if timeBlockHour.text > currentHour then set class to future
    } else {
      console.log("event is upcoming");
    }
  };
};

// on save get/set storage
const saveEvent = function (event) {
  //   declare timeBlockContainer current target
  const currentTarget = event.currentTarget;
  // declare .saveBtn target
  const target = event.target;

  const userClicked = $(target).attr("data-save");

  // LOCAL STORAGE
  //   get textarea input value (event details)
  let eventDescription = $(target).prev().val();

  //   get event time from saveBtn data-attribute
  let eventHour = userClicked;

  // create event object for LS
  let eventDetails = {
    hour: eventHour,
    description: eventDescription,
  };
  console.log(eventDetails);

  //   get from LS
  const eventDetailsFromLS = JSON.parse(localStorage.getItem("eventTimeDesc"));
  if (!eventDetailsFromLS) {
    // declare data for LS
    const eventInfo = [eventDetails];

    // set in LS
    localStorage.setItem("eventTimeDesc", JSON.stringify(eventInfo));
  } else {
    const myEventArray = eventDetailsFromLS;
    // push new data into array
    myEventArray.push(eventDetails);
  }
};

// EVENT LISTENERS
$(timeBlockContainer).on("click", saveEvent);
$(document).ready(renderDateTime);
$(document).ready(renderTimeBlocks);
