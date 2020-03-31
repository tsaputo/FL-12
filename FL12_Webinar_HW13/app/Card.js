import checkWin from './checkWin';
export default class Card {
    constructor(id) {
        this.isChosen = false;
        this.id = id;
    }

    toggleBackground(value) {
        if (value === 0) {
            document.getElementById(this.id).style.background = "url('app/images/zero.png') no-repeat center"
            document.getElementById(this.id).value = value;
        } else if (value === 1) {
            document.getElementById(this.id).style.background = "url('app/images/cross.png') no-repeat center"
            document.getElementById(this.id).value = value;
        } else document.getElementById(this.id).style.background = "none";
    }

    chooseCard(value) {
        document.getElementById(this.id).onclick = () => {
            this.toggleBackground(value);
            this.isChosen =  true;
            checkWin();
        };
    }
}