const divArrow = document.querySelector('div.arrow');
const nav = document.querySelector('nav');
const arrow = document.querySelector('i');

divArrow.addEventListener('click', function () {
    nav.classList.toggle('active');
    divArrow.classList.toggle('active');
})