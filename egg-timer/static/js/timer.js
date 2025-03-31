document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset-button");
    const timerDisplay = document.getElementById("timer-display");
    let timer;
    let timeLeft;

    startButton.addEventListener("click", function() {
        const inputTime = document.getElementById("time-input").value;
        timeLeft = parseInt(inputTime) * 60; // Convert minutes to seconds
        if (isNaN(timeLeft) || timeLeft <= 0) {
            alert("Please enter a valid time in minutes.");
            return;
        }
        startTimer();
    });

    resetButton.addEventListener("click", function() {
        resetTimer();
    });

    function startTimer() {
        timerDisplay.textContent = formatTime(timeLeft);
        timer = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Time's up!");
            } else {
                timeLeft--;
                timerDisplay.textContent = formatTime(timeLeft);
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        timerDisplay.textContent = "00:00";
        document.getElementById("time-input").value = "";
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
});