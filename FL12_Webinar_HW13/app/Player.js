export default class Player {
    constructor(name, cardType, isTurn) {
        this.name = name;
        this.cardType = cardType;
        this.isTurn = isTurn;

    }
    wins = 0;

    emptyWins() {
        this.wins = 0;
    }

    addWins() {
        this.wins++;
    }

}