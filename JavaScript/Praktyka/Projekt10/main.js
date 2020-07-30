function time() {
    let time = 0;

    function showTime() {
        document.body.textContent = `${++time} sekund`;
    }
    return showTime;
}

const czas = time();
setInterval(czas, 1000);