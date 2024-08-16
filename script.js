document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    if (!themeToggleBtn || !darkIcon || !lightIcon) {
        console.error('Theme toggle button or icons not found');
        return;
    }


    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        console.log('Dark mode enabled based on localStorage or system preference');
    } else {
        document.documentElement.classList.remove('dark');
        console.log('Light mode enabled based on localStorage or system preference');
    }


    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDarkMode = document.documentElement.classList.contains('dark');
        console.log('Theme toggled:', isDarkMode);

        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    
});