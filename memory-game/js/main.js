console.log("Up and running!");

const cards=["queen", "queen", "king", "king"];
const cardsInPlay=[];

let cardOne= cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);

let cardTwo= cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);


/*let cardThree= cards[3];
cardsInPlay.push(cardThree);
console.log("User flipped " + cardsInPlay[2]);*/


let cardFour= cards[4];


	if (cardsInPlay.length === 2)
	{
		if (cardsInPlay[0]===cardsInPlay[2])
		alert(" You found a match!");
		else 
		alert("Sorry, try again!");
	}
	