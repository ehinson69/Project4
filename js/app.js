/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//***Created an instance for the game class*/
let game;

//Created event listeners for the start and onscreen keyboard buttons.
const btn__reset = document.getElementById("btn__reset");
const qwerty = document.getElementById("qwerty");

btn__reset.addEventListener('click', function () {
    game = new Game();
    game.startGame();
});

qwerty.addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName != "BUTTON")
        return;
    game.handleInteraction(target);
});

// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase} `);
// console.log('Active Phrase - phrase: ${game.activePhrase.phrase}');
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());


window.addEventListener("keydown", function (event) { //Added feature for extra credit so the keydown works using keyboard to enter letters
    let clickedKey = String.fromCharCode(event.keyCode).toLowerCase();
    const buttons = document.getElementsByClassName("key");
    let s = 0;

    for (s = 0; s < buttons.length; s++) {
        if (buttons[s].innerText == clickedKey)
            break;
    }

    if (s != 26)
        game.handleInteraction(buttons[s]);
});

// game.phrases.forEach((phrase, section) => {
// $('input:text').val("phrase", "section");
// console.log(`Phrase ${section} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
// //$('input:text').val("phrase");
// console.log(`Phrase - phrase: `, phrase.phrase);
// };

// game.getRandomPhrase().addPhraseToDisplay();