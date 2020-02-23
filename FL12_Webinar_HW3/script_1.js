class Deck {
    constructor () {
        this.cards = new Array();
        const suits = ["hearts","diamonds","clubs","sprades"];
        let ranksAmount = 13;
        for (let j = 0; j < suits.length; j++) {
            for (let i = 1; i <= ranksAmount; i++) {
                this.cards.push(new Card(suits[j], i));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i >= 0; i-- ) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let itemAtIndex = this.cards[randomIndex];

            this.cards[randomIndex] = this.cards[i];
            this.cards[i] = itemAtIndex;
        }
        return this.cards;
    }

    draw(n) {
        let popped = [];
        for (let i = 0; i < n; i++) {
            popped.push(this.cards.pop());
        } 
        return popped;
    }

    get count () {
        return this.cards.length;
    }


}

class Card {
    constructor (suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.isFacedCard = function () {
            if (rank === 1 || rank > 10) {
                 return true;
            } else return false;
        }();
    }
    
    toString() { 
        let vaules = {1: "Ace", 2: "2", 3: "3", 4: "4",
        5: "5", 6: "6", 7:"7", 8: "8", 9:"9", 
        10:"10", 11: "Jack", 12: "Queen", 13: "King"};
        cardRankVal = vaules[this.rank];
        console.log(`${cardRankVal} of ${this.suit}`);
    }

    static compare(cardOne, cardTwo) {
       if (cardOne.rank > cardTwo.rank) {
           return "cardOne";
       } else if (cardTwo.rank > cardOne.rank) {
            return "cardTwo";
       } else return 'similar';

    }
}


class Player {
    constructor (name) {
        this.name = name;
        this.wins = 0;
        this.deck;
    }

    static play = function (playerOne, playerTwo) { 
        debugger;
        playerOne.wins = 0;
        playerTwo.wins = 0;
        playerOne.deck = new Deck;
        playerTwo.deck = new Deck;
        playerOne.deck.shuffle();
        playerTwo.deck.shuffle();
        while (playerOne.deck.count > 0) {
            let playerOneCard = playerOne.deck.draw(1)[0];
            let playerSecondCard = playerTwo.deck.draw(1)[0];
            let winnerCard = Card.compare(playerOneCard,playerSecondCard);
            if (winnerCard === "cardOne") {
                playerOne.wins++;
            } else if (winnerCard === "cardTwo") {
                playerTwo.wins++;
            }
        }

        if (playerOne.wins > playerTwo.wins) {
            return `${playerOne.name} wins ${playerOne.wins} to ${playerTwo.wins}`
        } else {
            return `${playerTwo.name} wins ${playerTwo.wins} to ${playerOne.wins}`
        }
    }
}

let playerOne = new Player('Ivan');
let playerTwo =  new Player('Fedor');
Player.play(playerOne, playerTwo);