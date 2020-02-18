const cards = [
{rank:"Queen", suit:"hearts", cardImage:"images/queen-of-hearts.png"},
{rank:"Queen", suit:"diamonds", cardImage:"images/queen-of-diamonds.png"},
{rank:"King", suit:"hearts", cardImage:"images/king-of-hearts.png"},
{rank:"King", suit:"diamonds", cardImage:"images/king-of-diamonds.png"} ]

let cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0]===cardsInPlay[1]) {
			console.log("You found a match!");
		} else {console.log("Sorry, try again.");
	};
};

var flipcard = function (cardId) {
	console.log ("User flipped " + cards[cardId].rank);
	console.log ("User flipped " + cards[cardId].suit);
	console.log ("User flipped " + cards[cardId].cardImage);
	cardsInPlay.push (cards[cardId].rank);

};

flipcard (0);

flipcard (1);

	checkForMatch();



