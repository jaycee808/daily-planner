// variables for current day and time
var currentDay = moment().format('dddd Do MMMM YYYY');
var currentTime = moment().format('LT');

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

// display current date and time to the screen
$('#currentDay').append(currentDay);
$('#currentTime').append(currentTime);

// variable to compare current hour
var compareHour = moment().format('HH');

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

// local storage
// event listener for save buttons
saveBtn9am.onclick = function() {
    // 9am input
    var input9am = document.getElementById('active9');
    localStorage.setItem('input9am', JSON.stringify(active9.value));

}

saveBtn10am.onclick = function() {
    // 10am input
    var input10am = document.getElementById('active10');
    localStorage.setItem('input10am', JSON.stringify(active10.value));
}

saveBtn11am.onclick = function() {
    // 11am input
    var input9am = document.getElementById('active11');
    localStorage.setItem('input11am', JSON.stringify(active11.value));
}

saveBtn12pm.onclick = function() {
    // 12pm input
    var input12pm = document.getElementById('active12');
    localStorage.setItem('input12am', JSON.stringify(active12.value));
}

saveBtn1pm.onclick = function() {
    // 1pm input
    var input1pm = document.getElementById('active13');
    localStorage.setItem('input1pm', JSON.stringify(active13.value));
}

saveBtn2pm.onclick = function() {
    // 2pm input
    var input2pm = document.getElementById('active14');
    localStorage.setItem('input2pm', JSON.stringify(active14.value));
}
saveBtn3pm.onclick = function() {
    // 3pm input
    var input3pm = document.getElementById('active15');
    localStorage.setItem('input3pm', JSON.stringify(active15.value));
}

saveBtn4pm.onclick = function() {
    // 4pm input
    var input4pm = document.getElementById('active16');
    localStorage.setItem('input4pm', JSON.stringify(active16.value));
}
saveBtn5pm.onclick = function() {
    // 5pm input
    var input5pm = document.getElementById('active17');
    localStorage.setItem('input5pm', JSON.stringify(active17.value));
}