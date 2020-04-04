import checkWin from './checkWin'
import randomInRange from './randomInRange'

export default function handleClick(i, card, allCards, player, computer) {
    card.toggleCard(player.getCardType());
    document.getElementById(`card_${i}`).setAttribute("disabled", "disabled");
    allCards[i-1].isChosen = true;
    let isGameOver = checkWin();    
    if (!isGameOver) {
        setTimeout(() => {
            let compCard;
            let randomInt = 0;
            do {
                randomInt = randomInRange(0,8);
                compCard = allCards[randomInt];
            } while (compCard.isChosen)   
            
            if (compCard.isChosen === false) {
                compCard.toggleCard(computer.getCardType());
                allCards[randomInt].isChosen = true;
                document.getElementById(`card_${randomInt+1}`).setAttribute("disabled", "disabled");                        
            }            
        }, 1000);
    }
}