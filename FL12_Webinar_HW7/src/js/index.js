const MAX_ROUNDS = 3;

let currentRound = 0;
let myWins = 0;

const gameReset = () => {
    currentRound = 0;
    myWins = 0;
    buttonsEnable();
    resetLayout();
}


const resetLayout = () => {
    let resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = "";
}

const opponentChoice = () => {
    const VALUES_ARR = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * Math.floor(3));
    return VALUES_ARR[index];
}

const myChoice = (button) => {
    let myChoice = button.id;

    let oppChoice;
    do {
        oppChoice = opponentChoice();
    } while(oppChoice === myChoice );
    
    play(myChoice, oppChoice);
}

const play = (myChoice, oppChoice) => {
    let win = false;

    if (myChoice === "rock" && oppChoice === "scissors") {
        myWins++;        
        win = true;
    } else if (myChoice === "paper" && oppChoice === "rock") {
        myWins++;
        win = true;
    } else if (myChoice === "scissors" && oppChoice === "paper") {
        myWins++; 
        win = true;  
    } 

    currentRound++;
    drawRound(myChoice, oppChoice, win);

    return myWins; 
}

const drawRound = (myChoice, oppChoice, win) => {
    let result = win ? "You've WON!" : "You've LOOSE!"
    let p = document.createElement("p");
    p.innerHTML = `Round ${currentRound}: ${myChoice} vs ${oppChoice}, ${result}`;
    
    let resultContainer = document.getElementById('results-container');
    resultContainer.appendChild(p);

    if (currentRound == MAX_ROUNDS) {
        buttonsDisable();

        let gameResult = myWins > Math.floor(MAX_ROUNDS/2) ? "WIN" : "LOOSE"
        p = document.createElement("p");
        p.innerHTML = `You ${gameResult} this game!`;
        resultContainer.appendChild(p);
    }
}




