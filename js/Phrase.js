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
        let phraseUl = document.getElementsByTagName('ul');
        for (let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement('li');
            if (this.phrase[i] = " ") {
                li.classList.add('space');
                let space = document.createTextNode(' ');
            } else {
                li.classList.add("hide");
                li.classList.add("letter");
                li.classList.add(this.phrase[i]);
                let letter = document.createTextNode(this.phrase[i]);
                li.appendChild(letter);
            }
            phraseUl[0].appendChild(li);
        }
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

    //***If the letter chosen is matchMedia, then display it, if not, remove a heart*/
    checkLetter(letter) {   
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] == letter)
                return true; 
        }
        return false;        
    };
};

    