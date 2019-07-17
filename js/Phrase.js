/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//Created a class to handle the creation of phrases.
class Phrase {
    constructor(phrase (`new Phrase('Some phrase')`)) {
        this.phrase = phrase;

    }

    //**Display phrase on game board.*/
    addPhraseToDisplay() {

    }

    showMatchedLetter(event) {

        function showMatchedLetter(letter) {
            $('.letter').each(function () {
                if ($(this).text() === letter) {
                    $(this).addClass('show');
                }
            });
        }

    };
}  