export default class Card {
    constructor(id) {
        this.isChosen = false;
        this.id = id;
    }

    toggleCard(value) {
        if (value === 0) {
            document.getElementById(this.id).style.background = "url('app/images/zero.png') no-repeat center"
            document.getElementById(this.id).value = value;
        } else if (value === 1) {
            document.getElementById(this.id).style.background = "url('app/images/cross.png') no-repeat center"
            document.getElementById(this.id).value = value;
        } else document.getElementById(this.id).style.background = "none";
    }
}