function makeNumber(str) {
    let arr= str.split('');
    let newArr = [];
    let i;
    for (i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join('');
}

makeNumber('dhjsv12hvszdha432');