//

alert('Hello, friends.'); 

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []; 

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

function flipCard(cardId) {
checkForMatch();
/* if (length.cardsInPlay === 2) {
	
 } else if (cardsInPlay[0] === cardsInPlay[1]) {
  result = alert("You found a match!");
 } else if (cardsInPlay[0] !== cardsInPlay[1]) {
  result = alert("Sorry, try again.");
 } 
*/
 console.log("User flipped " + cards[cardId]);
 cardsInPlay.push("cards[cardId]");
};
flipCard(0);
flipCard(2);


