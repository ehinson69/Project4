/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js by Elizabeth Hinson */

//Created a Game class method to start and end my game.
class Game {
    constructor() { //Game class constructor method receiving one phrase parameter.
        this.missed = 0;
        this.phrases = [ //added 5 new phrase objects.
            new Phrase("You did it"),
            new Phrase("We made it"),
            new Phrase("We applaud you"),
            new Phrase("You got it"),
            new Phrase("Level up")
        ];
        this.activePhrase = null;
    };

    createRandomPhrase() { //Selects random phrase from property
        let phraseIndex = Math.floor(Math.random() * (this.phrases.length)); //Creating a variable to randomly chooses quote
        return this.phrases[phraseIndex]; //Returns the phrase object chosen to be used
    };

    //***Begins game by selecting a random phrase and displaying it to user.*/
    startGame() {
        $('#overlay').hide();
        this.activePhrase = this.createRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    //***Checks for winning move return {boolean}*/
    //True if game has been won, false if game wasn't won.
    checkForWin() {
        const letter = document.getElementsByClassName("letter");
        let showLength = $('.show').length;
        let letterLength = $('.letter').length;
        if (showLength === letterLength) {
            this.gameOver(true);
        }
    };

    //***Increases the value of the missed property
    //Removes a life from the scoreboard
    //Checks if player has remaining lives and ends game if player is out*/
    removeLife() {
        $('.tries img[src="images/liveHeart.png"]:first').attr('src', 'images/lostHeart.png', 'missed.tries');
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    };

    //***Displays game over message @param {boolean} gameWon
    //Whether or not the user won the game*/
    gameOver() {
        let overlay = document.getElementById("overlay");
        overlay.style.display = "block";

        let game_over_message = document.getElementById("game-over-message");

        if (this.missed === 5) {
            game_over_message.innerText = "Sorry, please try again!";
            $("#overlay").removeClass("start").addClass("lose");
        } else {
            game_over_message.innerText = "Awesome, good game!";
            $("#overlay").removeClass("start").addClass("win");
        }
        this.resetGame();
    };

    //***Handles onscreen keyboard button clocks @param (HTMLButtonElement) button
    //The clicked button element*/
    handleInteraction(e) {
        let $guess = $(e.target).text();
        $(e.target).prop("disabled", true);
        if (this.activePhrase.checkLetter($guess)) {
            this.activePhrase.showMatchedLetter($guess);
            $(e.target).addClass('chosen');
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            $(e.target).addClass("wrong");
            this.removeLife();
        }
    };

    //this method resets the entire game by removing the li elements 
    resetGame() {
        $('.tries img[src="images/lostHeart.png"]').attr('src', 'images/liveHeart.png', 'missed.tries');
        $('#phrase ul li').remove();
        $('.key')
            .removeClass('chosen')
            .removeClass('wrong')
            .removeAttr('disabled');
    };

};