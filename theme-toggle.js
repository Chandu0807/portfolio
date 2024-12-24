
document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('theme-toggle');
    const root = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleCheckbox.checked = true;
        applyTheme(true);
    }

    function applyTheme(isDark) {
        const theme = {
            '--bg-color': isDark ? '#1a1a1a' : '#F5F5F5',
            '--text-color': isDark ? '#ffffff' : '#1A1A2E',
            '--light-bg-color': isDark ? '#333333' : 'white',
            '--header-bg-color': isDark ? '#0f0f0f' : '#16213E',
            '--button-bg-color': isDark ? '#4c4c4c' : '#80002a',
            '--shadow-color': isDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.4)'
        };

        Object.entries(theme).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });
    }

    toggleCheckbox.addEventListener('change', function() {
        const isDarkMode = this.checked;
        applyTheme(isDarkMode);
       
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

   
    setTimeout(() => {
        document.body.classList.add('theme-transition');
    }, 500);
});