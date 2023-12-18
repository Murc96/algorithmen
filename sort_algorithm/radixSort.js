"use strict";
function getDigit(num, index) {
    let digit = Math.floor(Math.abs(num) / Math.pow(10, index) % 10);
    return digit;
}
function digitCount(num) {
    if (num === 0)
        return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}
console.log(getDigit(-457, 0));
console.log(digitCount(791));
