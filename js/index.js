const btnDarkMode = document.querySelector('.dark_mode_btn');

// check browser settings
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add('dark_mode_btn--active');
    document.body.classList.add('dark');
}

// check dark theme
if(localStorage.getItem('Darkmode') === 'dark') {
    btnDarkMode.classList.add('dark_mode_btn--active');
    document.body.classList.add('dark');
}

// dark/light button
btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle('dark_mode_btn--active');
    const isDark = document.body.classList.toggle('dark');

    if(isDark){
        localStorage.setItem('Darkmode', "dark");
    } else {
        localStorage.setItem("DarkMode", "light");
    }

}