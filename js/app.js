/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js by Elizabeth Hinson*/

//***Created an instance for the game class*/
let game;

//Created event listeners for the start and onscreen keyboard buttons.
$('#btn__reset').on('click', function () {
    game = new Game();
    game.startGame();
});

$('.key').on('click', function (key) {
    game.handleInteraction(key);
});

// //Test for phrases:

// // game.phrases.forEach((phrase, index) => {
// //     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// // });

//const logPhrase = (phrase) => {
//console.log(`Phrase - phrase: `, phrase.phrase);
//const randomPhrase = game.getRandomPhrase();
//const phrase = new Phrase(randomPhrase.phrase);
//phrase.addPhraseToDisplay();

//logPhrase(game.getRandomPhrase());
//logPhrase(game.getRandomPhrase());
//logPhrase(game.getRandomPhrase());
//logPhrase(game.getRandomPhrase());
//logPhrase(game.getRandomPhrase());

//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

