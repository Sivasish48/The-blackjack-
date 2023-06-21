
let player = {
    name:"Sivasish" ,
    chips:100
}


let firstCard = getRandomCard();

let secondCard =  getRandomCard();

let cards = [firstCard , secondCard] ; // array list of ordered card items..

let hasBlackjack = false;

let isAlive = false ;

let message = "";

let messageEl = document.getElementById("message-el");

let sumEl = document.querySelector("#sum-el");
let sum = firstCard + secondCard;



let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + " : $" + player.chips ;

function getRandomCard(){
    
    let randomNumber = Math.floor(Math.random()*13)+1;

     if (randomNumber > 10 ) {
        
        return 10;

     } else if(randomNumber === 1) {
         
        return 1;

     } else {

        return randomNumber;
     }
}

function startGame(){
     isAlive = true ;

     let firstCard = getRandomCard();

     let secondCard = getRandomCard();

     cards = [firstCard , secondCard]

     sum = firstCard + secondCard ;

    renderGame();
}

let cardsEl = document.getElementById("cards-el");

 
function renderGame() {

   cardsEl.textContent = "Cards: " ;
     
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum  ;

    if (sum <= 20) {
        message = "Do you want to draw a new card?😛 ";
    } else if (sum === 21) {
        message = "Wohoo You have got blackjack!🤩🥳";
        hasBlackjack = true;
    } else {
        message = "You are out of the game.😬😓";
        isAlive = false ;
    }
    
   messageEl.textContent = message;
}

function newCard() {

    if(isAlive == true && hasBlackjack == false){
        let card = getRandomCard();

        sum += card ;
         
        cards.push(card);
    
        renderGame();
    }

   
}