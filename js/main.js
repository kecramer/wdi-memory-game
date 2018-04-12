var cards = [
{
	rank: "queen",
	suite: "hearts",
	cardImage: "images/queen-of-hearts.png",
	cardId: 0,
	matched: false
},
{
	rank: "queen",
	suite: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
	cardId: 1,
	matched: false
}, 
{
	rank: "king",
	suite: "hearts",
	cardImage: "images/king-of-hearts.png",
	cardId: 2,
	matched: false
},
{
	rank: "king",
	suite: "diamonds",
	cardImage: "images/king-of-diamonds.png",
	cardId: 3,
	matched: false
}
];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("you found a match!");
		cards[cardsInPlay[0].cardId].matched = true;
		cards[cardsInPlay[1].cardId].matched = true;
	} else {
		alert("sorry, try again!")
		setTimeout(resetBoard, 1000);
	}
	cardsInPlay = [];
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("user flipped " + cards[cardId].rank + "\nsuit: " + cards[cardId].suite + "\nimage: " + cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var resetBoard = function() {
	var cardElements = document.querySelectorAll(".board img");
	for (var i = 0; i < cardElements.length; i++) {
		if (cards[i].matched == false) {
			cardElements[i].setAttribute('src', 'images/back.png');
		}
	}
};

createBoard();