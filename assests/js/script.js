// variables for current day and time
var currentDay = moment().format('dddd Do MMMM YYYY');
console.log(currentDay);
var currentTime = moment().format('LT');
console.log(currentTime);

// display current date and time to the screen
$('#currentDay').append(currentDay);
$('#currentTime').append(currentTime);

// variables for time blocks
var hour1 = document.querySelector('#hour1');
var hour2 = document.querySelector('#hour2');
var hour3 = document.querySelector('#hour3');
var hour4 = document.querySelector('#hour4');
var hour5 = document.querySelector('#hour5');
var hour6 = document.querySelector('#hour6');
var hour7 = document.querySelector('#hour7');
var hour8 = document.querySelector('#hour8');
var hour9 = document.querySelector('#hour9');

console.log(hour1.dataset.hour);
console.log(hour2.dataset.hour);
console.log(hour3.dataset.hour);
console.log(hour4.dataset.hour);
console.log(hour5.dataset.hour);
console.log(hour6.dataset.hour);
console.log(hour7.dataset.hour);
console.log(hour8.dataset.hour);
console.log(hour9.dataset.hour);

// variable to compare current hour
var compareHour = moment().format('HH');

// if statements to compare current hour with data-hour value
if (hour1 && compareHour == 9) {
    console.log("it's 9am");
}
if (hour2 && compareHour == 10) {
    console.log("it's 10am");
}
if (hour3 && compareHour == 11) {
    console.log("it's 11am");
}
if (hour4 && compareHour == 12) {
    console.log("it's 12pm");
}
if (hour5 && compareHour == 13) {
    console.log("it's 1pm");
}
if (hour6 && compareHour == 14) {
    console.log("it's 2pm");
}
if (hour7 && compareHour == 15) {
    console.log("it's 3pm");
}
if (hour8 && compareHour == 16) {
    console.log("it's 4pm");
}
if (hour9 && compareHour == 17) {
    console.log("it's 5pm");
}