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
function mostDigits(arr) {
    let maxDigits = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = digitCount(arr[i]);
        if (count > maxDigits) {
            maxDigits = count;
        }
    }
    return maxDigits;
}
console.log(getDigit(-457, 0));
console.log(digitCount(791));
let myUnsortedArr = [22, 555, 10, 799, 5000, 74, 431, 9999, 55643];
console.log(mostDigits(myUnsortedArr));
function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        const buckets = Array.from({ length: 10 }, () => []);
        arr.forEach(num => {
            buckets[getDigit(num, k)].push(num);
        });
        arr = [];
        buckets.forEach(bucket => {
            bucket.forEach(num => {
                arr.push(num);
            });
        });
    }
    return arr;
}
console.log(radixSort(myUnsortedArr));
