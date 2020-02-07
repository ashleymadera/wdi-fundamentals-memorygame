const cards=[
{
rank:"queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank:"queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank:"king",
suit: "hearts",
cardImage:"images/king-of-hearts.png"
},
{
rank:"king",
suit: "diamonds",
cardImage:"images/king-of-diamonds.png"
}
];


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

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
console.log(cardImage);
console.log(suit);
	if (cardsInPlay.length === 2)
	{
		checkForMatch();
	}
};

 //cards flipped

flipCard(0);
flipCard(2);
//console.log(cardImage);
//console.log(suit);
const createBoard (){
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', 'attributeValue');
    cardElement.setAttribute('card'+ i);
     cardElement.addEventListener('click', flipCard);
   document.getElementsByTagName('ul')[0].appendChild(cardElement);




