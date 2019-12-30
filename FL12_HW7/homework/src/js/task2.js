const MAX_ATTEMPTS = 3;
const RANGE_INCREASE = 4;
const INITIAL_MAX_RANGE = 8;
const INITIAL_MAX_PRIZE = 100;
const PRIZE_INCREASE = 2;
const PRIZE_DECREASE = 2;

let attempts;
let prizeForFirstAttempt;
let minRange = 0;
let maxRange = 8;
let bank = 0;
let userWins = false;
let possiblePrize = 100;


if (!confirm('Do you want to play a game?')) {
    alert('You did not become a billionaire, but can.');
} else {
    let isConfirmed = true;
    while(isConfirmed) { 
        let magicNumber = Math.floor(Math.random() * (maxRange + 1)); 
        
        for (attempts = MAX_ATTEMPTS; attempts > 0; attempts--) {
            if (attempts === MAX_ATTEMPTS) {
                prizeForFirstAttempt = possiblePrize;
            }
            let userInput = prompt(
                `Choose a roulette pocket number from ${minRange} to ${maxRange}
                Attempts left: ${attempts}
                Total prize: ${bank}$
                Possible prize on current attempt: ${possiblePrize}$
                ${magicNumber}`);
            let userNumber = parseInt(userInput);
            if (userInput === null) {
                userWins = false;
                break;
            } else if (isNaN(Number(userInput))) {
                alert('You should enter a number');
            } else if(userNumber === magicNumber) {
                bank += possiblePrize;
                userWins = true;
                break;
            }        
            possiblePrize = possiblePrize/PRIZE_DECREASE;
        }
        
        if (userWins) {
            if(confirm(`Congratulation, you won! Your prize is: ${possiblePrize}$ Do you want to continue?`)){
                maxRange = maxRange+RANGE_INCREASE;
                possiblePrize = prizeForFirstAttempt*PRIZE_INCREASE;
            } else {
                alert(`Thank you for your participation. Your prize is: ${bank}$`);
                if(!confirm(`Do you want to play again?`)) {
                    alert('Game Over!')
                    isConfirmed = false;
                    break;
                } else {
                    possiblePrize = INITIAL_MAX_PRIZE;
                    bank = 0;
                    maxRange = INITIAL_MAX_RANGE;
                }
            }
            userWins = false;
        } else {
            alert(`Thank you for your participation. Your prize is: ${bank}$`);
            possiblePrize = INITIAL_MAX_PRIZE;
            bank = 0;
            maxRange = INITIAL_MAX_RANGE;
            if(!confirm(`Do you want to try again?`)) {
                alert('Game Over!')
                isConfirmed = false;
                break;
            }
        }
    }
}


