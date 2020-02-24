//task1

const _cards = Symbol('cards');
const _suit = Symbol('suit');

class Deck {
    constructor() {
        const suits = ['hearts', 'diamonds', 'clubs', 'sprades'];
        let ranksAmount = 13;
        this[_cards] = function () {
            let arr = [];
            for (let j = 0; j < suits.length; j++) {
                for (let i = 1; i <= ranksAmount; i++) {
                    arr.push(new Card(suits[j], i));
                }
            }
            return arr;
        }();

    }

    shuffle() {
        for (let i = this[_cards].length - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let itemAtIndex = this[_cards][randomIndex];

            this[_cards][randomIndex] = this[_cards][i];
            this[_cards][i] = itemAtIndex;
        }
        return this[_cards];
    }

    draw(n) {
        let popped = [];
        for (let i = 0; i < n; i++) {
            popped.push(this[_cards].pop());
        }
        return popped;
    }

    get count() {
        return this[_cards].length;
    }


}

class Card {
    constructor(suit, rank) {
        this[_suit] = suit;
        this.rank = rank;
        this.isFacedCard = function () {
            if (rank === 1 || rank > 10) {
                return true;
            } else {
                return false;
            }
        }();
    }

    toString() {
        const vaules = {
            1: 'Ace', 2: '2', 3: '3', 4: '4',
            5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
            10: '10', 11: 'Jack', 12: 'Queen', 13: 'King'
        };
        let cardRankVal = vaules[this.rank];
        console.log(`${cardRankVal} of ${this.suit}`);
    }

    static compare(cardOne, cardTwo) {
        if (cardOne.rank > cardTwo.rank) {
            return 'cardOne';
        } else if (cardTwo.rank > cardOne.rank) {
            return 'cardTwo';
        } else {
            return 'similar';
        }

    }
}


class Player {
    constructor(name) {
        this.name = name;
        this._wins = 0;
        this.deck;
    }

    addWin() {
        this._wins++;
    }

    static play(playerOne, playerTwo) {
        playerOne._wins = 0;
        playerTwo._wins = 0;
        playerOne.deck = new Deck();
        playerTwo.deck = new Deck();
        playerOne.deck.shuffle();
        playerTwo.deck.shuffle();
        while (playerOne.deck.count > 0) {
            let playerOneCard = playerOne.deck.draw(1)[0];
            let playerSecondCard = playerTwo.deck.draw(1)[0];
            let winnerCard = Card.compare(playerOneCard, playerSecondCard);
            if (winnerCard === 'cardOne') {
                playerOne.addWin();
            } else if (winnerCard === 'cardTwo') {
                playerTwo.addWin();
            }
        }

        if (playerOne.wins > playerTwo.wins) {
            return `${playerOne.name} wins ${playerOne._wins} to ${playerTwo._wins}`
        } else {
            return `${playerTwo.name} wins ${playerTwo._wins} to ${playerOne._wins}`
        }
    }
}

let playerOne = new Player('Ivan');
let playerTwo = new Player('Fedor');
Player.play(playerOne, playerTwo);