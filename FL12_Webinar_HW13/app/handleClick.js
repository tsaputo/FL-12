import checkWin from './checkWin'
import randomInRange from './randomInRange'
import Player from './Player'

export default function handleClick(i, card, allCards, player, computer) {
    if (document.getElementById(`card_${i}`).getAttribute("disabled")) {
        return;
    } 
        
    card.toggleCard(player.getCardType());
    document.getElementById(`card_${i}`).setAttribute("disabled", "disabled");
    allCards[i-1].isChosen = true;
    if (checkWin()) {
        alert(`${player.getName()} is our winner!`)
        player.addWins();
    } else {
        setTimeout(() => {
            let compCard;
            let randomInt = 0;
            do {
                randomInt = randomInRange(0,8);
                compCard = allCards[randomInt];
            } while (compCard.isChosen)   
            
            if (compCard.isChosen === false) {
                compCard.toggleCard(computer.getCardType());
                compCard.isChosen = true;
                if(checkWin()){
                    alert(`${computer.getName()} is our winner!`)
                    computer.addWins();
                }
                document.getElementById(`card_${randomInt+1}`).setAttribute("disabled", "disabled");                        
            }            
        }, 1000);
    }
}