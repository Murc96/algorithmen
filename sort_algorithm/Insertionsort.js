"use strict";
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
const myArray = [12, 11, 13, 5, 6];
insertionSort(myArray);
console.log("Sortiertes Array:", myArray);
