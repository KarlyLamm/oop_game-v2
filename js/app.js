
// creates a new instance of the `game`class
//and add event listeners for the start button 
//onscreen keyboards
//-------TEST CODE AREA--------------
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game= new Game();
// game.phrases.forEach((phrase, index)=>{
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`)
// })
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
// test to see that index.html is li for each letter of each phrase
// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();
// test for active phrase printed in console and startscreen overlay hidden
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
//-------TEST CODE AREA----------------
var game;
document.getElementById("btn__reset").addEventListener("click", function (
	event
) {
	game = new Game();
	game.startGame();
});
// hides overlay after clicking button
