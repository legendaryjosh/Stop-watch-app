// Get DOM elements
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Variables to keep track of time
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let isRunning = false;

// Start Button
startBtn.addEventListener('click', () => {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
});

// Stop Button
stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

// Reset Button
resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
});

// Function to update time
function updateTime() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

// Function to format and display time
function updateDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  timerDisplay.textContent = `${h}:${m}:${s}`;
}

// Initialize display
updateDisplay();
