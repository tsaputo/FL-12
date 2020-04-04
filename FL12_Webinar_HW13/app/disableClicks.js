export default function disableClicks(listener) {
    for (let i = 1; i <= 9; i++) {
        let card = document.getElementById(`card_${i}`);
        if (card.getAttribute("disabled")) {
            card.removeEventListener("click", listener, false);
        }
    }
}

