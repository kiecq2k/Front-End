// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/


//Obiekt podsumowania gry
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

//Obiekt aktualnej gry
const game = {
    playerHand: "",
    aiHand: "",
}
//Pobranie grafik
const hands = [...document.querySelectorAll('.select img')];
//Funkcja wyboru reki
function handSelection(e) {
    //console.log(this);
    console.log(e.currentTarget);
    //console.log(this.getAttribute('data-option'));
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = "0 0 0 4px yellow";
}
//Zdarzenie na klikniecie reki
hands.forEach(hand => hand.addEventListener('click', handSelection));
//Pobranie przycisku PLAY
const btn = document.querySelector('.start');
//Funkcja do losowania wyboru komputera
function aiChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
}
//Funkcja do sprawdzenia wyniku
function checkResult(player, ai) {
    if (player === ai) {
        return 'draw';
    } else if (player === "papier" && ai === "kamień" || player === "kamień" && ai === "nożyczki" || player === "nożyczki" && ai === "papier") {
        console.log("Wygrałeś!");
        return 'win';
    } else {
        console.log("Przegrałeś!");
        return 'lose';
    }
}
//Funkcja do wyświetlenia wyniku
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!";
    } else if (result === 'lose') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał :(";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis!";
    }
}
//Funkcja resetujaca i konczaca gre
function endGame() {
    document.querySelector(`[data-option='${game.playerHand}']`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
}

//Funkcja do przycisku play
function startGame() {
    if (!game.playerHand) {
        return alert("Wybierz dłon!");
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}
//Zdarzenie na przycisk play
btn.addEventListener('click', startGame);