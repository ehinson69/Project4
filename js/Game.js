/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [{
                phrase: "You did it"
            },
            {
                phrase: "Don't give up"
            },
            {
                phrase: "We applaud you"
            },
            {
                phrase: "You got it"
            },
            {
                phrase: "Level up"
            }
        ];

        // this.phrases = ["You did it", "Don't give up", "We applaud you", "You got it", "Level up"];
        this.activePhrase = 'null';
    }

    createPhrase() {
        let phrases = [this.phrases];
        return phrases;
    }

    //**Selects random phrase from phrases property @ return {Object}
    //Phrase object chosen to be used. */
    getRandomPhrase() {
        let index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    };
//***Begins game by selecting a random phrase and displaying it to user.*/
    startGame() {
        $('#overlay').hide();

    };

}