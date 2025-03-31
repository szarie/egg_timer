document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('input');

    // Set initial theme based on checkbox state
    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
    }

    // Toggle theme when switch is clicked
    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        themeToggle.checked = false;
    }
});