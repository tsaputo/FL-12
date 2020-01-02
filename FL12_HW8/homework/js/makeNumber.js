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

makeNumber('dhjsv12hvszdha432');
// makeNumber('123dhjsv12hvszdha432');