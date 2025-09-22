let home = document.getElementById("home-score");
let away = document.getElementById("away-score");
let down = document.getElementById("downage");
let distance = document.getElementById("yardage");

let homeTuddy = 0;
let awayTuddy = 0;

// Functions for the home side of the scoreboard
function homeTD() {
  homeTuddy += 6;
  home.textContent = homeTuddy;
}

function homeShortXP() {
  homeTuddy += 1;
  home.textContent = homeTuddy;
}

function homeLongXP() {
  homeTuddy += 2;
  home.textContent = homeTuddy;
}

function homeReset() {
  homeTuddy = 0;
  home.textContent = 0;
}

// Functions for the away side of the scoreboard
function awayTD() {
  awayTuddy += 6;
  away.textContent = awayTuddy;
}

function awayShortXP() {
  awayTuddy += 1;
  away.textContent = awayTuddy;
}

function awayLongXP() {
  awayTuddy += 2;
  away.textContent = awayTuddy;
}

function awayReset() {
  awayTuddy = 0;
  away.textContent = 0;
}

// Functions to adjust the down
let downage = parseInt(down.innerHTML);

function increaseDown() {
  if (downage < 4) {
    downage += 1;
    down.innerHTML = downage;
  } else {
    console.log("You have already hit the max downage");
  }
}

function decreaseDown() {
  if (downage > 1) {
    downage -= 1;
    down.innerHTML = downage;
  } else {
    console.log("You have already hit the min downage");
  }
}

// Functions to adjust the distance
let yardage = parseInt(distance.innerHTML);

function increaseDistance() {
  if (yardage < 25) {
    yardage += 1;
    distance.innerHTML = yardage;
  } else {
    console.log("Distance maxes out at 25");
  }
}

function decreaseDistance() {
  if (yardage > 1) {
    yardage -= 1;
    distance.innerHTML = yardage;
  } else {
    console.log("Yardage can not be zero or negative");
  }
}
