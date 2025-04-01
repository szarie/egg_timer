document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle functionality
    const themeToggle = document.getElementById('input');

    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        themeToggle.checked = false;
    }

    // Timer functionality
    const timerButtonsContainer = document.querySelector(".parent");
    const mainContent = document.querySelector(".parent");

    timerButtonsContainer.addEventListener("click", (event) => {
        // Find the button element that was clicked or is an ancestor of the clicked element
        let button = event.target;
        while (button && button.nodeName !== 'BUTTON' && button !== timerButtonsContainer) {
            button = button.parentNode;
        }

        // If we found a button, process it
        if (button && button.nodeName === 'BUTTON') {
            if (button.id === 'soft-boiled') {
                startTimer(6 * 60); // 6 minutes
            } else if (button.id === 'firm-yolk') {
                startTimer(8 * 60); // 8 minutes
            } else if (button.id === 'hard-boiled') {
                startTimer(10 * 60); // 10 minutes
            } else if (button.id === 'startButton') {
                const customTime = document.getElementById('Custom').value;

                // First check if it's a valid number
                if (customTime && !isNaN(customTime) && customTime > 0) {
                    // Then check if it's too long
                    if (parseInt(customTime) > 15) {
                        alert('Warning: Cooking time is too long!');
                        // Optional: Add a confirmation
                        if (confirm("Are you sure you want to continue with " + customTime + " minutes?")) {
                            startTimer(parseInt(customTime) * 60);
                        }
                    } else {
                        // Valid time under limit
                        startTimer(parseInt(customTime) * 60);
                    }
                } else {
                    // Invalid input
                    alert('Please enter a valid time in minutes.');
                }
            }

            function startTimer(seconds) {
                // Save original content
                //const originalContent = mainContent.innerHTML;
                const elementsToHide = Array.from(mainContent.children);
                const timerContainer = document.createElement('div');
                timerContainer.className = 'timer-container';


                // Create timer display
                const timerDisplay = document.createElement('div');
                timerDisplay.className = 'timer-display';

                // Add cancel button
                const cancelButton = document.createElement('button');
                cancelButton.textContent = 'Cancel';
                cancelButton.className = 'cancel-button';

                // Replace content with timer
                // mainContent.innerHTML = '';
                // mainContent.appendChild(timerDisplay);
                // mainContent.appendChild(cancelButton);
                elementsToHide.forEach(elem => elem.style.display = 'none');
                timerContainer.appendChild(timerDisplay);
                timerContainer.appendChild(cancelButton);
                mainContent.appendChild(timerContainer);

                // Start countdown
                let remainingSeconds = seconds;
                updateTimerDisplay();

                const timerInterval = setInterval(updateTimerDisplay, 1000);

                function updateTimerDisplay() {
                    if (remainingSeconds <= 0) {
                        clearInterval(timerInterval);
                        timerDisplay.textContent = 'Done!';

                        // Add a return button
                        const returnButton = document.createElement('button');
                        returnButton.textContent = 'Return';
                        returnButton.className = 'return-button';
                        returnButton.addEventListener('click', () => {
                            mainContent.innerHTML = originalContent;
                        });
                        mainContent.appendChild(returnButton);

                        // Optional: Add notification sound
                        const audio = new Audio('/egg-timer/static/sounds/timer-done.mp3');
                        audio.play().catch(e => console.log('Audio play failed:', e));

                        return;
                    }

                    const minutes = Math.floor(remainingSeconds / 60);
                    const seconds = remainingSeconds % 60;
                    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    remainingSeconds--;
                }

                // Handle cancel button
                cancelButton.addEventListener('click', () => {
                    clearInterval(timerInterval);
                    elementsToHide.forEach(elem => elem.style.display = '');
                    //mainContent.innerHTML = originalContent;
                    timerContainer.remove();
                });
            }
        }
    })
});