const time = document.querySelector(".time");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const timer = document.querySelector("#timer");
const clock = document.querySelector("#clocktime");
const alarm = document.querySelector("#alarm");
const submit = document.querySelector("#submit");
const hourinput = document.querySelector("#hourinput");
const minsinput = document.querySelector("#minsinput");

clock.addEventListener("click", digitalClock);
function digitalClock() {
  const clockDate = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let date = clockDate.toLocaleDateString("en-US", options);
  let hrs = clockDate.getHours();
  let mins = clockDate.getMinutes();
  let secs = clockDate.getSeconds();
  hrs = checkTime(hrs);
  mins = checkTime(mins);
  secs = checkTime(secs);
  time.innerHTML = hrs + ":" + mins + ":" + secs;
  day.innerHTML = date;
  setTimeout(digitalClock, 1000); //callback fn
}
 digitalClock();

function checkTime(e) {
  if (e < 10) {
    e = "0" + e;
  }
  return e;
}
// timer.addEventListener("click", Timer);
// function Timer() {
//   submit.addEventListener("click", (event) => {
//     event.preventDefault();
//     const hour = parseInt(hourinput.value, 10) || 0;
//     const minutes = parseInt(minsinput.value, 10) || 0;
//     const totalSeconds = hour * 3600 + minutes * 60;
//     if (totalSeconds <= 0 || isNaN(totalSeconds)) {
//       alert("Please enter valid values for hours and minutes.");
//       return;
//     }

//     let seconds = totalSeconds;

//     let timerInterval = setInterval(() => {
//       const displayHours = Math.floor(seconds / 3600);
//       const displayMinutes = Math.floor((seconds % 3600) / 60);
//       const displaySeconds = seconds % 60;

//       time.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}s`;

//       if (seconds <= 0) {
//         clearInterval(timerInterval);
//         time.innerHTML = "Timer Expired!";
//       }

//       seconds--;
//     }, 1000); // Update every second
 
//   });
// }
