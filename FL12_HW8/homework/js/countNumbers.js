function makeNumber(str) {
    let newArr = [];
    let i;
    for (i = 0; i < str.length; i++) {
        let num = parseInt(str.charAt(i));
        if(!isNaN(num)) {
            newArr.push(num);
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
        obj['\'' + result.charAt(0) + '\''] = 1;
        for (i = 1; i < result.length; i++) {
            if (obj['\'' + result.charAt(i)+ '\'' ]) {
                obj['\'' + result.charAt(i) + '\'' ]++;
            } else {
                obj['\'' + result.charAt(i) + '\'' ] = 1;
            }
        }
        return obj;
    }
}

countNumbers("gggvjc5555661");
// countNumbers();