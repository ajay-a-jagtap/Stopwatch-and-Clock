// Stopwatch variables
let stopwatchInterval;
let stopwatchTime = 0;
let isRunning = false;

// Function to update the current time (clock)
function updateClock() {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  document.getElementById("currentTime").textContent = `${hours}:${minutes}:${seconds}`;
}

// Stopwatch functions
function startStopwatch() {
  if (!isRunning) {
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      document.getElementById("stopwatchDisplay").textContent = formatTime(stopwatchTime);
    }, 1000);
    document.getElementById("startStopBtn").textContent = "Stop";
    isRunning = true;
  } else {
    clearInterval(stopwatchInterval);
    document.getElementById("startStopBtn").textContent = "Start";
    isRunning = false;
  }
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById("stopwatchDisplay").textContent = "00:00:00";
  document.getElementById("startStopBtn").textContent = "Start";
  isRunning = false;
}

function formatTime(seconds) {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${secs}`;
}

// Start clock immediately
setInterval(updateClock, 1000);
