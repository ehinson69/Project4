/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ["You did it", "Don't give up", "We applaud you", "You got it", "Level up"];
        this.activePhrase = 'null';
    }
    
    //**Selects random phrase from phrases property @ return {Object}
    //Phrase object chosen to be used. */
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    };

}