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

function countNumbers(str) {
    let result;
    let obj = {};
    let i;
    if (str === undefined) {
        return obj;
    } else {
        result = makeNumber(str);
        obj[result.charAt(0)] = 1;
        for (i = 1; i < result.length; i++) {
            if (obj[result.charAt(i)]) {
                obj[result.charAt(i)]++;
            } else {
                obj[result.charAt(i)] = 1;
            }
        }
        return obj;
    }
}

countNumbers("gggvjc5555661");
countNumbers();