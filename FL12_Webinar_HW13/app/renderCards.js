import emptyCells from './emptyCells'
import Card from './Card';
import chooseType from './chooseType'
import Player from './Player'
import handleClick from './handleClick'
import disableClicks from './disableClicks'

export default function renderCards() {
    let myChoice =  chooseType();
    let player = new Player('Me', myChoice);
    let compChoice = myChoice==0 ? 1:0;
    let computer = new Player('Computer', compChoice);
    let allCards = [];

    for (let i = 1; i <= 9; i++) {
        let card = new Card(`card_${i}`);
        allCards.push(card);

        let listener = function() {            
            handleClick(i, card, allCards, player, computer);
            disableClicks(listener);
        }; 

        document.getElementById(`card_${i}`).addEventListener(
        "click", listener, false); 
        
    }
    emptyCells();
}
