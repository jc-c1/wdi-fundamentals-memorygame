let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0]===cardsInPlay[1]) {
			console.log("You found a match!");
		} else {console.log("Sorry, try again.");
	};
};

var flipcard = function (cardId) {
	console.log ("User flipped " + cards[cardId]);
	cardsInPlay.push (cards[cardId]);

};

flipcard (0);

flipcard (1);

	checkForMatch();



