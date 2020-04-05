import Card from "./Card";
export default class Player {
    constructor(name, cardType) {
        this.name = name;
        this.cardType = cardType;
        this.wins = 0;
    }

    getName() {
        return this.name;
    }

    emptyWins() {
        this.wins = 0;
    }

    getCardType() {
        return this.cardType;
    }

    addWins() {
        this.wins++;
    }
    
    chooseCard () {
        toggleCard(this.cardType);
    }

}