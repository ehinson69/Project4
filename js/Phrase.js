/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js by Elizabeth Hinson */

class Phrase {
    constructor (phrase) {
       this.phrase = phrase.toLowerCase();
   };
  
   addPhraseToDisplay(){
       const ul = document.getElementById("phrase"); //Display phrase on game board
       ul.innerHTML = "";
       
       const splitPhrase = this.phrase.split("");
       splitPhrase.forEach( letter => {
           
           const li = document.createElement('li');
           ul.append(li);
          
           if (letter === " ") {   
              li.classList.add("space");
           } else {
               li.innerHTML = letter;       
               li.classList.add('letter',`${letter}`);
           }
       });
   }
    checkLetter(key){
       return this.phrase.includes(key); //Checks if selected letter is in phrase
   }
   
//**Display passed letter on screen after a match is found @param (string) letter*/
    //Letter to display
    showMatchedLetter(letter) {
        $('.letter.' + letter).removeClass('hide').addClass('show');
    };

};
