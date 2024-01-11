const time = document.querySelector(".time");
const day = document.querySelector(".day");
const date = document.querySelector(".date");

const digitalClock = () => {
  const clockDate = new Date();
  let options = {weekday: 'long',year:"numeric", month:"short", day:"numeric"}
  let date = clockDate.toLocaleDateString("en-US",options)
  let hrs = clockDate.getHours();
  let mins = clockDate.getMinutes();
  let secs = clockDate.getSeconds();
  hrs = checkTime(hrs);
  mins = checkTime(mins);
  secs = checkTime(secs);
  time.innerHTML = hrs +':' + mins + ':' + secs;
  day.innerHTML = date
  setTimeout(digitalClock, 1000); //callback fn
};
digitalClock();

function checkTime(e) {
  if (e < 10) {
    e = "0" + e;
  }
  return e;
}
