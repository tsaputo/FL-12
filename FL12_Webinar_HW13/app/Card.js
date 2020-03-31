export default class Card {
    constructor(id) {
        this.value = -1;
        this.id = id;
    }

    toggleBackground() {
        if (this.value === 0) {
            document.getElementById(this.id).style.background = "url('app/images/zero.png') no-repeat center"
        } else if (this.value === 1) {
            document.getElementById(this.id).style.background = "url('app/images/cross.png') no-repeat center"
        } else document.getElementById(this.id).style.background = "none";
    }

    alertMethod() {
        document.getElementById(this.id).onclick = () => {
            this.toggleBackground();
        };
    }
}