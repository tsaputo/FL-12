function isLeapYear(text) {
  const year = new Date(text).getFullYear();
  return isNaN(year)?
  'Invalid Date' : `"${year}" is${year%400 ===0||year%4=== 0 && year % 100 !== 0?'':' not'} a leap year`
}

isLeapYear(1213131313);
// isLeapYear('2020-01-01 00:00:00');
// isLeapYear('December 17, 1995 03:24:00');
// isLeapYear(1213131313235235234234234234234);