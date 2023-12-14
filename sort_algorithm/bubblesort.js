"use strict";
function bubbleSort(myData) {
    for (let i = 0; i < myData.length; i++) {
        for (let j = 0; j < myData.length - i - 1; j++) {
            if (myData[j] > myData[j + 1]) {
                [myData[j], myData[j + 1]] = [myData[j + 1], myData[j]];
            }
        }
    }
    return myData;
}
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sortiertes Array:", sortedArray);
