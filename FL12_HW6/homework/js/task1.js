// Your code goes here

const VALUES_TO_ENTER = 3;
const DIGITS_AFTER_DOT = 2;

let arr = [];
while (arr.length < VALUES_TO_ENTER) {
    let i = parseFloat(prompt('Please, enter the number',''));
    if (isNaN(i)) {
        alert('Invalid input data');
    } else {
        arr.push(i);
    }
}

let a = arr[0];
let b = arr[1];
let c = arr[2];

let discriminant = b*b - 4*a*c;

if (discriminant > 0) {
    let x1 = (-b - Math.sqrt(discriminant))/(2*a);
    let x2 = (-b + Math.sqrt(discriminant))/(2*a);
    alert('x1 = '+ x1.toFixed(DIGITS_AFTER_DOT) +','+' x2 = '+ x2.toFixed(DIGITS_AFTER_DOT));
} else if (discriminant === 0) {
    let x = (-b + Math.sqrt(discriminant))/(2*a);
    alert('x = '+ x.toFixed(DIGITS_AFTER_DOT));
} else if (discriminant < 0) {
    alert('no solution');
}

