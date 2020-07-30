//Download elements
const inputTask = document.querySelector('input.add');
const btnAdd = document.querySelector('button.submit');
const inputSearch = document.querySelector('input.search');
const list = document.querySelector('ol');
const count = document.querySelector('h1.count span');
let numberTasks = 0;
//Defining functions
const addElement = () => {
    const li = document.createElement('li');
    li.textContent = inputTask.value;
    if (inputTask.value === '') return;
    list.appendChild(li);
    count.textContent = ++numberTasks;
    const btn = document.createElement('button');
    btn.textContent = "Delete";
    btn.style.marginLeft = "10px";
    btn.style.cursor = "pointer";
    btn.style.letterSpacing = "2px";
    li.appendChild(btn);
    const btnDelete = list.querySelectorAll('li button');
    btnDelete.forEach((element, index) => {
        element.addEventListener('click', deleteElement);
    })
}

const deleteElement = (e) => {
    event.target.parentNode.remove();
    count.textContent = --numberTasks;
}

const searchElements = () => {
    const inputText = inputSearch.value;
    let arrList = [...document.querySelectorAll('li')];
    arrList = arrList.filter((element) => element.textContent.includes(inputText));
    list.textContent = arrList;
}


//Events
btnAdd.addEventListener('click', addElement);
inputSearch.addEventListener('input', searchElements);