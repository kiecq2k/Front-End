// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];
const div = document.querySelector('div');

const showMessage = (e) => {
    div.textContent = '';
    //tutaj rozwiązanie
    passwords.forEach((password, index) => {
        if (password.toLowerCase() === e.target.value.toLowerCase()) {
            div.textContent = messages[index];
        }
    })
}

input.addEventListener("input", showMessage)