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
// var compareHour = 12;

// if else statements to compare current hour with data-hour value and change style
// 9am
if (hour1 && compareHour == 9) {
    console.log("it's 9am");
    $('#active9').addClass('present');
} else if (hour1 && compareHour != 9 && compareHour >= 10) {
    $('#active9').addClass('past');
} else {
    $('#active9').addClass('future');
}
// 10am
if (hour2 && compareHour == 10) {
    console.log("it's 10am");
    $('#active10').addClass('present');
} else if (hour2 && compareHour != 10 && compareHour >= 11) {
    $('#active10').addClass('past');
} else {
    $('#active10').addClass('future');
}
// 11am
if (hour3 && compareHour == 11) {
    console.log("it's 11am");
    $('#active11').addClass('present');
} else if (hour3 && compareHour != 11 && compareHour >= 12) {
    $('#active11').addClass('past');
} else {
    $('#active11').addClass('future');
}
// 12pm
if (hour4 && compareHour == 12) {
    console.log("it's 12pm");
    $('#active12').addClass('present');
} else if (hour4 && compareHour != 12 && compareHour >= 13) {
    $('#active12').addClass('past');
} else {
    $('#active12').addClass('future');
}
// 1pm
if (hour5 && compareHour == 13) {
    console.log("it's 1pm");
    $('#active13').addClass('present');
} else if (hour5 && compareHour != 13 && compareHour >= 14) {
    $('#active13').addClass('past');
} else {
    $('#active13').addClass('future');
}
// 2pm
if (hour6 && compareHour == 14) {
    console.log("it's 2pm");
    $('#active14').addClass('present');
} else if (hour6 && compareHour != 14 && compareHour >= 15) {
    $('#active14').addClass('past');
} else {
    $('#active14').addClass('future');
}
// 3pm
if (hour7 && compareHour == 15) {
    console.log("it's 3pm");
    $('#active15').addClass('present');
} else if (hour7 && compareHour != 15 && compareHour >= 16) {
    $('#active15').addClass('past');
} else {
    $('#active15').addClass('future');
}
// 4pm
if (hour8 && compareHour == 16) {
    console.log("it's 4pm");
    $('#active16').addClass('present');
} else if (hour8 && compareHour != 16 && compareHour >= 17) {
    $('#active16').addClass('past');
} else {
    $('#active16').addClass('future');
}
// 5pm
if (hour9 && compareHour == 17) {
    console.log("it's 5pm");
    $('#active17').addClass('present');
} else if (hour9 && compareHour != 17 && compareHour >= 18) {
    $('#active17').addClass('past');
} else {
    $('#active17').addClass('future');
}
