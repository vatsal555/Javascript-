const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const displayTime = document.querySelector("#displayTime");

let isStop = true;

let hour = 0;
let minute = 0;
let second = 0;

const timer = () => {
  //   console.log("timer");
  if (isStop == false) {
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);

    second++;
    // console.log(second);

    if (second === 60) {
      second = 0;
      minute++;
      //   console.log(minute);
    }

    if (minute === 60) {
      minute = 0;
      hour++;
      //   console.log(hour);
    }

    if (second < 10) {
      second = "0" + second;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }

    displayTime.innerHTML = hour + " : " + minute + " : " + second;
    setTimeout(timer, 100);
  }
};

start.addEventListener("click", () => {
  console.log("starting");
  if (isStop) {
    isStop = false;
    timer();
  }
});

stop.addEventListener("click", () => {
  console.log("stoping");
  isStop = true;
});

reset.addEventListener("click", () => {
  console.log("reset");
  isStop = true;
  second = 0;
  hour = 0;
  minute = 0;
  displayTime.innerHTML = "00 : 00 : 00";
});
