const cards = [
{rank:"Queen", suit:"hearts", cardImage:"images/queen-of-hearts.png"},
{rank:"Queen", suit:"diamonds", cardImage:"images/queen-of-diamonds.png"},
{rank:"King", suit:"hearts", cardImage:"images/king-of-hearts.png"},
{rank:"King", suit:"diamonds", cardImage:"images/king-of-diamonds.png"} ]

let cardsInPlay = [];

let checkForMatch = function () {
	if (cardsInPlay[0]===cardsInPlay[1]) {
			console.log("You found a match!");
		} else {console.log("Sorry, try again.");
	};
};

let flipcard = function () {
	let cardId = this.getAttribute("data-id");
	console.log ("User flipped " + cards[cardId].rank);
	console.log ("User flipped " + cards[cardId].suit);
	console.log ("User flipped " + cards[cardId].cardImage);
	cardsInPlay.push (cards[cardId].rank);

};

let createBoard = function () {
	for (let i=0; i < cardsInPlay.length;; i++) {
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "image/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipcard());
		document.getElementById("game-board").appendchild(cardElement);
	}

};

createBoard ();

checkForMatch();



