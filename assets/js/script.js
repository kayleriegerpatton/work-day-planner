// TARGET HTML ELEMENTS
const dateContainer = $("#currentDay");
const timeBlockContainer = $(".container");

// render date and time display
const onReady = function () {
  const timerTick = function () {
    const dateTime = moment();
    const dateTimeFormatted = dateTime.format("dddd, MMM Do YYYY, h:mm a");

    dateContainer.text(dateTimeFormatted);
  };
  const timer = setInterval(timerTick, 1000);
};

const renderTimeBlocks = function () {
  console.log("time blocks rendered");
  const timeBlockHour = $("<h2 class='hour'>09:00 AM</h2>");
  const timeBlockTextarea = $(
    "<textarea class='' name='' id='' cols='30' rows='1'></textarea>"
  );
  const timeBlockSave = $("<button class='saveBtn'>Save</button>");

  timeBlockContainer.append(timeBlockHour, timeBlockTextarea, timeBlockSave);
};

// on load:
//  get from local storage
// render timeblocks and text content

// LS
// keys by hour

// click event on save button (use target and event capturing)

$(document).ready(onReady);
$(document).ready(renderTimeBlocks);
