// TARGET HTML ELEMENTS
const dateContainer = $("#currentDay");
const timeContainer = $("#currentTime");
const timeBlockContainer = $("#container");
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

// set key/value pairs for LS
const timeBlocks = [
  { hour: "09:00", localStorageKey: 9 },
  { hour: "10:00", localStorageKey: 10 },
  { hour: "11:00", localStorageKey: 11 },
  { hour: "12:00", localStorageKey: 12 },
  { hour: "13:00", localStorageKey: 13 },
  { hour: "14:00", localStorageKey: 14 },
  { hour: "15:00", localStorageKey: 15 },
  { hour: "16:00", localStorageKey: 16 },
  { hour: "17:00", localStorageKey: 17 },
];

const getClassName = function (localStorageKey) {
  return "present";
};

const getEventText = function (localStorageKey) {
  //   get data from LS
  // check if LS object contains LS key
  // if doesn't exist, return empty string
  // else return object value
  return "foo bar";
};

const constructTimeBlock = function (eachTimeBlock) {
  // get CSS color
  const className = getClassName(eachTimeBlock.localStorageKey);

  // get textarea text
  const eventText = getEventText(eachTimeBlock.localStorageKey);

  // get time label
  const timeLabel = eachTimeBlock.hour;

  //   get saveBtn id
  const buttonID = eachTimeBlock.localStorageKey;

  // construct timeblock elements
  const timeBlockElement = ` <div class="timeblock">
<h2 class="hour">${timeLabel}</h2>
<textarea class=${className}>${eventText}</textarea>
<button class="saveBtn" id="${buttonID}">Save</button>
</div>`;

  return timeBlockElement;
};

const renderTimeBlocks = function () {
  // map through key/value pairs array to construct timeblocks
  const timeBlockElements = timeBlocks.map(constructTimeBlock).join("");

  // append to main container
  timeBlockContainer.append(timeBlockElements);
};

// on save get/set storage
const saveEvent = function (event) {
  //   declare timeBlockContainer current target
  const currentTarget = event.currentTarget;
  // declare .saveBtn target
  const target = event.target;

  const userClicked = $(target).attr();
  console.log(userClicked);
  //   if clicked on saveBtn, run
  // if () {
  //   get textarea input value (event details)
  let eventDescription = $(target).prev().val();

  //   get event time from saveBtn data-attribute
  let eventHour = userClicked;

  //   get from LS
  const eventDetailsFromLS = JSON.parse(localStorage.getItem(eventHour));
  if (!eventDetailsFromLS) {
    // set in LS
    localStorage.setItem(eventHour, JSON.stringify(eventDescription));
  } else {
    // set data in LS
    localStorage.setItem(eventHour, JSON.stringify(eventDescription));
  }
  // }
};

const initializeLS = function () {
  //   get from LS
  const eventDetailsFromLS = JSON.parse(localStorage.getItem("eventDetails"));
  if (!eventDetailsFromLS) {
    // set in LS
    localStorage.setItem("eventDetails", JSON.stringify({}));
  }
};

const onReady = function () {
  initializeLS();
  renderDateTime();
  renderTimeBlocks();
};

// EVENT LISTENERS
$(timeBlockContainer).on("click", saveEvent);
$(document).ready(onReady);
