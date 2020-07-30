/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;
let isChanging = true;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode);
  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
  //tutaj twój kod
  // wersja 1 - instrukcja if
  // const key = e.keyCode;
  // if (key === 38) {
  //   if (red < 255) {
  //     red += 5;
  //     green += 5;
  //     blue += 5;
  //   }
  // } else if (key === 40) {
  //   if (red > 0) {
  //     red -= 5;
  //     green -= 5;
  //     blue -= 5;
  //   }
  // }
  // document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  // wersja 2 - instrukcja switch
  const key = e.keyCode;
  switch (key) {
    case 38:
      if (red < 255) {
        red += 5;
        green += 5;
        blue += 5;
      }
      break;
    case 40:
      if (red > 0) {
        red -= 5;
        green -= 5;
        blue -= 5;
      }
      // break;
  }
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener('keydown', changeColor);