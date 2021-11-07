// TARGET HTML ELEMENTS
const dateContainer = $("#currentDay");
const timeContainer = $("#currentTime");
const timeBlockContainer = $("#container");
const timeBlockDiv = $(".timeblock");
const currentHour = moment().hour();

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

const onReady = () => {
  initializeLS();
  renderDateTime();
  renderTimeBlocks();
};

//  get from local storage
const initializeLS = () => {
  //   get from LS
  const eventDetailsFromLS = JSON.parse(localStorage.getItem("eventDetails"));
  if (!eventDetailsFromLS) {
    // set in LS
    localStorage.setItem("eventDetails", JSON.stringify({}));
  }
};

// render date and time display
const renderDateTime = () => {
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

const getClassName = (localStorageKey) => {
  // get data from LS
  const eventDetailsFromLS = JSON.parse(localStorage.getItem(localStorageKey));

  // if greater, set class to past
  if (currentHour > localStorageKey) {
    return "past";
    // if less than, set class to future
  } else if (currentHour < localStorageKey) {
    return "future";
  } else {
    return "present";
  }
};

const getEventText = (localStorageKey) => {
  //   get data from LS
  const eventDetailsFromLS = JSON.parse(localStorage.getItem(localStorageKey));

  // check if LS object contains LS key

  if (!eventDetailsFromLS) {
    // if doesn't exist, return empty string
    return "";
  } else {
    // else return object value
    return eventDetailsFromLS;
  }
};

const constructTimeBlock = (eachTimeBlock) => {
  // get CSS color
  const className = getClassName(eachTimeBlock.localStorageKey);

  // get textarea text
  const eventText = getEventText(eachTimeBlock.localStorageKey);

  // get time label
  const timeLabel = eachTimeBlock.hour;

  //   get saveBtn id
  const buttonID = eachTimeBlock.localStorageKey;

  // construct timeblock elements
  const timeBlockElement = `<div class="timeblock">
<h2 class="hour">${timeLabel}</h2>
<textarea class="textarea ${className}">${eventText}</textarea>
<button class="saveBtn" id="${buttonID}">Save</button>
</div>`;

  return timeBlockElement;
};

const renderTimeBlocks = () => {
  // map through key/value pairs array to construct time blocks
  const timeBlockElements = timeBlocks.map(constructTimeBlock).join("");

  // append to main container
  timeBlockContainer.append(timeBlockElements);
};

// on save get/set storage
const saveEvent = (event) => {
  // declare .saveBtn target
  const target = event.target;

  const userClicked = $(target).attr("id");

  //   get textarea input value (event details)
  let eventDescription = $(target).prev().val();

  // if userclicked is a savebtn, then set to LS
  if ($.isNumeric(userClicked)) {
    JSON.parse(userClicked);
    let eventHour = JSON.parse(userClicked);

    //   get from LS
    const eventDetailsFromLS = JSON.parse(localStorage.getItem(eventHour));
    if (!eventDetailsFromLS) {
      // set in LS
      localStorage.setItem(eventHour, JSON.stringify(eventDescription));
    } else {
      // set data in LS
      localStorage.setItem(eventHour, JSON.stringify(eventDescription));
    }
  }
};

// EVENT LISTENERS
$(document).ready(onReady);
$(timeBlockContainer).on("click", saveEvent);
