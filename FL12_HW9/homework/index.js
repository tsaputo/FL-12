// Your code goes here

function convert(...args){
    let arr = [];
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            arr.push(args[i]+'')
        } else {
            arr.push(+args[i]);
        }
    }
    return arr;
}

convert('1', 2, 3, '4') // [1, '2', '3', 4]

function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

executeforEach([1,2,3], function(el) {
    console.log(el * 2)
});

function mapArray(arr, callback){
    let transformedArray = [];
    for (let i = 0; i < arr.length; i++) {
        transformedArray.push(callback(+arr[i]));
    }
    return transformedArray;
}

mapArray([2, '5', 8], function(el) {
    return el + 3
}); // returns [5, 8, 11]

function filterArray(arr, callback) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

filterArray([2, 5, 8], function(el) { 
    return el % 2 === 0
}); 
// returns [2, 8]

function flipOver(str) {
    let reversed = '';
     for (let char of str) {
        reversed = char+reversed;
     }

     return reversed;
}

flipOver('hey world') // 'dlrow yeh'

function makeListFromRange(arr) {
    let maxRange = arr[1];
    if (arr[0] === arr[1]) {
        return [arr[0]];
    } else if (arr[0] < arr[1]){
        let range = makeListFromRange(arr, arr[1]--, maxRange-1);
        range.push(maxRange);
        return range;
    } 
}

makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7];

function getArrayOfKeys(arr, key) {
    let arrayOfKeys = [];
    executeforEach(arr, function(el) {
        if (el.hasOwnProperty(key)) {
        arrayOfKeys.push(el[key]);
        }
     });
    return arrayOfKeys;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];
   
getArrayOfKeys(actors, 'name'); // [‘tommy’, ‘lee’]

function substitute(arr) {
    return mapArray(arr, function(el) {
        if (el < 30) {
            el = '*';
        } 
        return el;
    });
}

substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']


function getPastDay(date, days) {
    const millisecondsPerMinute = 1000;
    const secondsPerMinute = 60;
    const minsPerHour = 60;
    const hoursPerDay = 24
    let daysInMS = days*hoursPerDay*minsPerHour*secondsPerMinute*millisecondsPerMinute;
    let daysPassed = new Date(date-daysInMS).getDate();
    return daysPassed;
}

const date = new Date(2019, 0, 2);

getPastDay(date, 1); // 1, (1 Jan 2019)
getPastDay(date, 2); // 31, (31 Dec 2018)
getPastDay(date, 365); // 2, (2 Jan 2018)

function formatDate(date) {
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${hour}:${minute}`;
}

formatDate(new Date('6/15/2018 09:15:00')) // "2018/6/15 09:15"
// formatDate(new Date()) // "2020/1/7 12:56" // gets current local time
