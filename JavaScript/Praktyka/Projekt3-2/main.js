let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const reset = document.createElement('button');
    reset.textContent = "Usun liste";
    document.body.appendChild(reset);
    btn.textContent = "Dodaj 10 elementow listy";
    btn.style.display = "inline-block";
    btn.style.margin = "20px auto";
    document.body.appendChild(btn);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements);
    reset.addEventListener('click', deleteList);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        const ul = document.querySelector('ul');
        li.textContent = orderElement;
        li.style.fontSize = `${size++}px`;
        ul.appendChild(li);
        orderElement++;
    }
}

const deleteList = () => {
    const ul = document.querySelector('ul');
    ul.textContent = "";
    orderElement = 1;
    size = 10;
}

init();