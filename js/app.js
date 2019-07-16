/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//Created an instance of the 'Game' class
let game;
let pressedKeys = [];

//Created event listeners for the start and onscreen keyboard buttons.
const startBtn = document.getElementById('btn_reset');
const keyboardBtns = document.getElementById('qwerty');

//Required temporary test code to create instances.
const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`);//undefined in console?

const game = new Game();
game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});

const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};

const game = new Game();

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());

game.getRandomPhrase().addPhraseToDisplay();







// var btn = document.createElement("BUTTON");   // Create a <button> element
// btn.innerHTML = "CLICK ME";                   // Insert text
// document.body.appendChild(btn);               // Append <button> to <body>//