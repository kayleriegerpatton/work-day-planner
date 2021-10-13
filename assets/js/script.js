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
    const timeFormatted = dateTime.format("k:mm:ss");

    dateContainer.text(dateTimeFormatted);
    timeContainer.text(timeFormatted);
  };
  timerTick();
  setInterval(timerTick, 1000);
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

  //   const setStyles = function () {
  //     // if timeBlockHour.text === currentHour then set class to present
  //     if (timeBlockHour == currentHour) {
  //       console.log("Event is now!");
  //       // if timeBlockHour.text < currentHour then set class to past
  //     } else if (timeBlockHour < currentHour) {
  //       console.log("event is past");

  //       // if timeBlockHour.text > currentHour then set class to future
  //     } else {
  //       console.log("event is upcoming");
  //     }
  //   };
};

const timeBlockValuesArray = [
  { hour: "9:00", localStorageKey: 9 },
  { hour: "10:00", localStorageKey: 10 },
  { hour: "11:00", localStorageKey: 11 },
  { hour: "12:00", localStorageKey: 12 },
  { hour: "13:00", localStorageKey: 13 },
  { hour: "14:00", localStorageKey: 14 },
  { hour: "15:00", localStorageKey: 15 },
  { hour: "16:00", localStorageKey: 16 },
  { hour: "17:00", localStorageKey: 17 },
];

// on save get/set storage
const saveEvent = function (event) {
  //   declare timeBlockContainer current target
  const currentTarget = event.currentTarget;
  // declare .saveBtn target
  const target = event.target;

  const userClicked = $(target).attr("data-save");

  //   if clicked on saveBtn, run
  //   if () {
  //     //   get textarea input value (event details)
  //     let eventDescription = $(target).prev().val();

  //     //   get event time from saveBtn data-attribute
  //     let eventHour = userClicked;

  //     //   get from LS
  //     const eventDetailsFromLS = JSON.parse(localStorage.getItem(eventHour));
  //     if (!eventDetailsFromLS) {
  //       // set in LS
  //       localStorage.setItem(eventHour, JSON.stringify(eventDescription));
  //     } else {
  //       // set data in LS
  //       localStorage.setItem(eventHour, JSON.stringify(eventDescription));
  //     }
  //   }
};

const onReady = function () {
  renderDateTime();
  renderTimeBlocks();
};

// EVENT LISTENERS
$(timeBlockContainer).on("click", saveEvent);
$(document).ready(onReady);
