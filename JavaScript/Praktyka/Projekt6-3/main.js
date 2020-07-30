const advices = ["walcz", "przemyśl to jeszcze raz"];
const addAdvice = document.querySelector('button.add');
const input = document.querySelector('input');
const reset = document.querySelector('button.clean');
const show = document.querySelector('button.showAdvice');
const h1 = document.querySelector('h1');
const options = document.querySelector('button.showOptions');

const addToArray = (e) => {
    e.preventDefault(); // nie przeladowuje strony 
    advices.push(input.value);
    console.log(advices);
}
const cleanArray = (e) => {
    e.preventDefault();
    while (advices.length > 0) {
        advices.pop();
    }
    console.log(advices);
}
const showAdvice = (e) => {
    e.preventDefault();
    const index = Math.floor(Math.random() * advices.length);
    h1.textContent = advices[index];
}

const showOptions = (e) => {
    e.preventDefault();
    alert(advices);
}

addAdvice.addEventListener('click', addToArray);
reset.addEventListener('click', cleanArray);
show.addEventListener('click', showAdvice);
options.addEventListener('click', showOptions);