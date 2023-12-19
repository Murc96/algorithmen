"use strict";
function merge(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
let arr1 = [10, 22, 3, 4, 5, 6, 87, 100, 44];
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
    return merge(sortedLeft, sortedRight);
}
console.log(mergeSort(arr1));
//# sourceMappingURL=mergesort.js.map