export default function checkWin() {
    let currentArr = [];
    for (let i = 1; i <= 9; i++) {
        currentArr.push(document.getElementById(`card_${i}`).value);    
    }
    console.log(currentArr);
    return currentArr;
}