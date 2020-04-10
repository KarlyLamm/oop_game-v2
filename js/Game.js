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
        this.phrases=[];
        this.createPhrases();
        this.activePhrase=null;
    }
    createPhrases(){
        this.phrases[0]= new Phrase("the shadows that were about to watch could be our journey");
        this.phrases[0]= new Phrase("Picture of a woman looking at a picture");
        this.phrases[0]= new Phrase("It can happen in the Twilight Zone");
        this.phrases[0]= new Phrase("Every man is put on earth condemned to die");
        this.phrases[0]= new Phrase("Express elevator to the ninth floor of a department store");
    }
	getRandomPhrase() {
		const randomIndex = Math.floor(
			Math.random() * Math.floor(this.phrases.length)
		);
		return this.phrases[randomIndex];
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
