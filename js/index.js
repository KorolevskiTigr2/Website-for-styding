const btnDarkMode = document.querySelector('.dark_mode_btn');

if(localStorage.getItem('Darkmode') === 'dark') {
    btnDarkMode.classList.add('dark_mode_btn--active');
    document.body.classList.add('dark');
}

btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle('dark_mode_btn--active');
    const isDark = document.body.classList.toggle('dark');

    if(isDark){
        localStorage.setItem('Darkmode', "dark");
    } else {
        localStorage.setItem("DarkMode", "light");
    }

}