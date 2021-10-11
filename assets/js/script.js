const dateContainer = $("#currentDay");

const onReady = function () {
  const timerTick = function () {
    const dateTime = moment();
    const dateTimeFormatted = dateTime.format("MMM Do YYYY, h:mm a");

    dateContainer.text(dateTimeFormatted);
  };
  const timer = setInterval(timerTick, 1000);
};

$(document).ready(onReady);

// $(document).load();
