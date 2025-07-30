let timer;
let timeLeft = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const minutesInput = document.getElementById('minutesInput');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = 
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;

  if (timeLeft <= 0) {
    const minutes = parseInt(minutesInput.value);
    if (isNaN(minutes) || minutes < 0) {
      alert("Please enter valid minutes");
      return;
    }
    timeLeft = minutes * 60;
  }

  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      isRunning = false;
      alert("Time's up!");
    } else {
      timeLeft--;
      updateDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 0;
  updateDisplay();
  minutesInput.value = '';
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();
