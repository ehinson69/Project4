/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Created a Game class method to start and end my game.
class Game {
    constructor() { //Game class constructor method receiving one phrase parameter.
        this.missed = 0;
        this.phrases = [ //added 5 new phrase objects.
            new Phrase("You did it"),
            new Phrase("Don't give up"),
            new Phrase("We applaud you"),
            new Phrase("You got it"),
            new Phrase("Level up")
        ];
        this.activePhrase = 'null';
    };
    //**Selects random phrase from phrases property @ return {Object}
    //Phrase object chosen to be used. */
    getRandomPhrase() {
        let phraseIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[phraseIndex];
    };
    //***Begins game by selecting a random phrase and displaying it to user.*/
    startGame() {
        $('#overlay').hide(); //hides the start screen overlay
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    // If the player has not revealed all the letters, they have no win.
    checkForWin() {
        const letters = document.getElementsByClassName("letter");

        for (let m = 0; m < letters.length; m++) {
            if (letters[m].classList.contains("hide"))
                return false;
        }
        return true;
    };

    //If the player guesses incorrectly, they lose a heart.
    removeLife() {
        const lives = document.getElementsByClassName("tries");
        lives[this.missed].firstElementChild.src = "images/lostHeart.png";

        if (this.missed == 4) {
            this.gameOver(false);
        }

        this.missed++;
    };

    // Display the original start screen overlay once the game is over.
    gameOver(gameWon) {
        let overlay = document.getElementById("overlay");
        overlay.style.display = "block";

        // Get the overlay h1 element
        let game_over_message = document.getElementById("game-over-message");

        // If the user won the game, display win message, else display loss
        // message
        if (gameWon) {
            game_over_message.innerText = "Great Job!";
            overlay.className = overlay.className.replace(/\bstart\b/g, "win");
        } else {
            game_over_message.innerText = "Sorry, better luck next time!";
            overlay.className = overlay.className.replace(/\bstart\b/g, "lose");
        }

    };

    phraseUl = document.getElementsByTagName("ul");
    letters = document.querySelectorAll(".letter");
    spaces = document.querySelectorAll(".space");

    for (let l = 0; l < letters.length; l++) {
        phraseUl[0].removeChild(letters[l]);
    };

    for (let s = 0; s < spaces.length; s++) {
        phraseUl[0].removeChild(spaces[s]);
    };

    //Enable and update the onscreen keyboard buttons to use the 'key' CSS class
    //and not use the 'chosen' or 'wrong' CSS classes as before.
    const buttons = document.getElementsByClassName("key");

    for (let b = 0; b < buttons.length; b++) {
        buttons[b].disabled = false;

        if (buttons[b].classList.contains("chosen"))
            buttons[b].classList.remove("chosen");

        if (buttons[b].classList.contains("wrong"))
            buttons[b].classList.remove("wrong");
    };

    // Reset all of the hearts
    const lives = document.getElementsByClassName("tries");
    for (let h = 0; h < lives.length; v++) {
        lives[h].firstElementChild.src = "images/liveHeart.png";
    };

    handleInteraction(button) {
        button.disabled = true;

        if (this.activePhrase.checkLetter(button.innerText)) {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(button.innerText);

            if (this.checkForWin()) {
                this.gameOver(true);
            } else {
                button.classList.add("wrong");
                this.removeLife();
            }
        }
    };
};