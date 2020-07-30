// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony
document.body.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    console.log(`x = ${x},y = ${y}`);
    changeColor(x, y);
})

const changeColor = (x, y) => {
    if (x % 2 === 0 && y % 2 === 0) {
        document.body.style.backgroundColor = "rgb(255,0,0)";
    } else if (x % 2 !== 0 && y % 2 !== 0) {
        document.body.style.backgroundColor = "rgb(0,0,255)";
    } else {
        document.body.style.backgroundColor = "rgb(0,255,0)";
    }
}