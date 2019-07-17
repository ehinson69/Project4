/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//Created a class to handle the creation of phrases.
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //**Display phrase on game board. When the game starts it will add a placeholder.*/
    //*It can determine if there is an actual space or letter*/
    addPhraseToDisplay() {
        let ul = document.querySelector('#phrase ul');
        ul.innerHTML = '';
        const splitPhrase = this.phrase.split('');
        splitPhrase.forEach(letter => {
            const li = document.createElement('li');
            ul.appendChild(li);

            if(letter === '') {
                li.className = ('space');
            } else {
                li.innerHTML = letter;
                li.className = ('hide letter ${letter}');
            }
        });

        console.log ('li: ' + li)
    }
    //**Display matched letters and if not hide the letters. */
    showMatchedLetter(event) {
        function showMatchedLetter(letter) {
            $('.letter').each(function () {
                if ($(this).text() === letter) {
                    $(this).addClass('show');
                } else {
                    $(this).addClass('hide');
                }
            });
        }

    };
};  