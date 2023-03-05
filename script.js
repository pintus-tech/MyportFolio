let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header')

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggle = document.querySelector('#theme-toggler');

themeToggle.onclick = () => {
    themeToggle.classList.toggle('fa-sun');
    if (themeToggle.classList.contains('fa-sun')) {

        document.body.classList.add('active');

    } else {
        document.body.classList.remove('active');
    }

}