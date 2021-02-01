let h, m, s;

let start, stop, pause, reset;

let lastUserH, lastUserM, lastUserS;

let lastTimer, interval;

let pauseButtonText = "Pause"


window.addEventListener('load', (event) => {
  h = document.getElementById("h");
  m = document.getElementById("m");
  s = document.getElementById("s");
  start = document.getElementById("start");
  stop = document.getElementById("stop");
  pause = document.getElementById("pause");
  reset = document.getElementById("reset");
});

function onStartClick() {
  lastUserH = h.value;
  lastUserM = m.value
  lastUserS = s.value

  // DOM
  start.style.display = "none";
  stop.style.display = "block";
  pause.style.display = "block";
  reset.style.display = "block";

  let timer = (parseInt(lastUserH) * 60 * 60) + (parseInt(lastUserM) * 60) + (parseInt(lastUserS)) //წუთებში
  StartCountdown(timer)
}

function onStopClick() {
  // DOM
  start.style.display = "block";
  stop.style.display = "none";
  pause.style.display = "none";
  reset.style.display = "none";
  // Values
  h.value = 0
  m.value = 0
  s.value = 0

  clearInterval(interval)

}

function onPauseClick() {
  if (pauseButtonText == "Pause") {
    pauseButtonText = "Resume"
    clearInterval(interval)
  } else {
    pauseButtonText = "Pause"
    StartCountdown(lastTimer)
  }
  pause.innerHTML = pauseButtonText;
}

function onResetClick() {
  clearInterval(interval)
  let timer = (parseInt(lastUserH) * 60 * 60) + (parseInt(lastUserM) * 60) + (parseInt(lastUserS)) //წუთებში
  StartCountdown(timer)
}

// Private functions
function StartCountdown(timer) {
  interval = setInterval(() => {
    timer = timer - 1;
    lastTimer = timer;
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor(timer % 3600 / 60);
    let seconds = Math.floor(timer % 3600 % 60);

    h.value = hours;
    m.value = minutes;
    s.value = seconds;

    if (timer <= 0) {
      onStopClick()
    }
  }, 1000)
}