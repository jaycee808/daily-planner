// variables for current day and time
var currentDay = moment().format('dddd Do MMMM YYYY');
console.log(currentDay);
var currentTime = moment().format('LT');
console.log(currentTime);

// display current date and time to the screen
$('#currentDay').append(currentDay);
$('#currentTime').append(currentTime);