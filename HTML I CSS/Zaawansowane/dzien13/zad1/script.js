const burger = document.querySelector('div.burger');
const burger1 = document.querySelector('.fa-bars');
const burger2 = document.querySelector('.fa-times');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
    menu.classList.toggle('show');
    burger1.classList.toggle('active');
    burger2.classList.toggle('active');
})