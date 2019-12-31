function isLeapYear (){
    let ourDate = new Date(arguments[0]);
    let year = ourDate.getFullYear();
    if(isNaN(year)) {
        return(`Invalid Date`)
    } else if (year%4 === 0) {
        if (year%100 === 0 && year%400 === 0) {
            return(`${year} is a leap year`)
        } else if(year%100 !== 0) {
            return(`${year} is a leap year`)
        }
    } else {
        return (`${year} is not a leap year`)
    }
}

isLeapYear(1213131313);
// isLeapYear('2020-01-01 00:00:00');
// isLeapYear('December 17, 1995 03:24:00');
// isLeapYear(1213131313235235234234234234234);