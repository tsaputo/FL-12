export default function checkWin() {
    let currentArr = [];
    for (let i = 1; i <= 9; i++) {
        currentArr.push(document.getElementById(`card_${i}`).value);    
    }

    let result  =  '';

    for (let i = 0; i < 9; i+=3) {
        if (currentArr[i] !== -1 && 
            currentArr[i] === currentArr[i+1] &&
            currentArr[i+1] === currentArr[i+2]) {
                result = 'we\'ve got a winner!'
                console.log(result)
        }
    }
    
    for (let i = 0; i < 3; i++) {
        if (currentArr[i]!== -1 && 
            currentArr[i] === currentArr[i+3] &&
            currentArr[i+3] === currentArr[i+6]) {
                result = 'we\'ve got a winner!'
                console.log(result)
        }
    }

    if (currentArr[0] === currentArr[4] 
        && currentArr[4] === currentArr[8] 
        && currentArr[0]!== -1 || currentArr[2] === currentArr[4] 
        && currentArr[4] === currentArr[6] 
        && currentArr[6]!== -1) {
            result = 'we\'ve got a winner!'
            console.log(result)
    }
    
    if (result !== '')  {
        return true;
    }  else return false;
}  