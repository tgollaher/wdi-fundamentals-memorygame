//

alert('Hello, friends.'); 

var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png",
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png",
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png",
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png",
    } 
  
  ];

var cardsInPlay = []; 

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

function flipCard() {

var cardId = this.getAttribute('data-id');

 this.setAttribute('src', cards[cardId].cardImage);
 if (length.cardsInPlay === 2) {
	checkForMatch();
 } else if (cardsInPlay[0] === cardsInPlay[1]) {
  result = alert("You found a match!");
 } else if (cardsInPlay[0] !== cardsInPlay[1]) {
  result = alert("Sorry, try again.");
 } 

 console.log("User flipped " + cards[cardId].rank);
 cardsInPlay.push("cards[cardId].rank");
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);

};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard());
		
	}
};

createBoard();















