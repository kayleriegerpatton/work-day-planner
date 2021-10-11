const dateContainer = $("#currentDay");

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
};

// on load:
//  get from local storage
// render timeblocks and text content

// LS
// keys by hour

// click event on save button (use target and event capturing)

$(document).ready(onReady);
$(document).ready(renderTimeBlocks);
