const cards=["queen", "queen", "king", "king"];
const cardsInPlay=[];


//Card Match function

function checkForMatch(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	}else {
	  console.log("Sorry, try again.");
	}
};

//Function for card flipping(calls for match function)

function flipCard (cardId){

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2)
	{
		checkForMatch();
	}
};

 //cards flipped

flipCard(0);
flipCard(2);




