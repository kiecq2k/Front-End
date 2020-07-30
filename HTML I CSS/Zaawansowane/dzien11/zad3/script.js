//Tworzenie uchwytow do elementow

let divOrange = document.querySelector('div.orange');
let divGreen = document.querySelector('div.green');
let divBlue = document.querySelector('div.blue');
let divYellow = document.querySelector('div.yellow');
let divRed = document.querySelector('div.red');
let divWhite = document.querySelector('div.white');

//Tworzenie akcji na klikniecie

divOrange.addEventListener('click', function () {
    document.body.className = 'orange';
});

divGreen.addEventListener('click', function () {
    document.body.className = 'green';
});

divBlue.addEventListener('click', function () {
    document.body.className = 'blue';
});

divYellow.addEventListener('click', function () {
    document.body.className = 'yellow';
});

divRed.addEventListener('click', function () {
    document.body.className = 'red';
});

divWhite.addEventListener('click', function () {
    document.body.className = "white";
})