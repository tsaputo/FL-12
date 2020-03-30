export default class Card {
    constructor(value) {
        this.value = value;
    }

toggleBackground() {
    if (this.value === "1") {
        this.style.backgroundImage = "url('')"
    } else if (this.value === "0") {
        this.style.backgroundImage = "url('')"
    } else this.style.backgroundImage = none;
}

}