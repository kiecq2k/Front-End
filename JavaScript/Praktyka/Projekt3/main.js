// tutaj rozwiązanie z petla for
// const btn = document.querySelector('button');
// const li = document.querySelectorAll('li');
// let font = 10; // wartosc fontSize dla li
// const changeFont = () => {
//     font += 1;
//     for (let i = 0; i < li.length; ++i) {
//         li[i].style.display = "block";
//         li[i].style.fontSize = font + "px";
//     }
// }
// btn.addEventListener('click', changeFont);


//rozwiazanie z metoda forEach
const btn = document.querySelector('button');
const li = document.querySelectorAll('li');
let font = 9; // wartosc fontSize dla li
const changeFont = () => {
    font += 1;
    li.forEach(function (listItem) {
        listItem.style.fontSize = font + "px";
        listItem.style.display = "block";
    })
}
btn.addEventListener('click', changeFont);