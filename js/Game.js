/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // create a game class methods for starting
 //and ending the game, handling interactions
 // getting random phrase, checking for win, and
 //removing life from scoreboard

 //declaration of Game Class
 class Game{
    constructor(){
        this.missed=0;
        this.phrases=[
            {
                phrase:"the shadows that were about to watch could be our journey"
            },
            {
                phrase:"Picture of a woman looking at a picture"
            },
            {
                phrase: "It can happen in the Twilight Zone"
            },
            {
                phrase: "Every man is put on earth condemned to die"
            },
            {
                phrase:"Express elevator to the ninth floor of a department store"
            }
        ];
        this.activePhrase=null;
    }
   getRandomPhrase(){
    let ranNumber=Math.floor(Math.random()*this.phrases.length);
    let randomPhrase=this.phrases[ranNumber]
    return randomPhrase;
   }
   //getRandomPhrase grabs random index from phrases and assigns it to the string
   startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
}
   //startGame method hides start screen overlay
}
//  const game = new Game()