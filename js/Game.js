/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = 'null'; 
    }
}
console.log(new Game);

//**Selects random phrase from phrases property @ return {Object}
//Phrase object chosen to be used. */
getRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];    
};

//**Create phrases for use in game @return {array}
//*An array of phrases that could be used in the game*/
createPhrase() {
    const randomPhrase = this.getRandomPhrase();
    return new Phrase(randomPhrase);
}
