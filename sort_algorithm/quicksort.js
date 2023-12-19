"use strict";
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivotValue > arr[i]) {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    return pivotIndex;
}
const unsorted = [5, 7, 1, 12, 3, 11];
function quickSort(arr, leftIndex = 0, rightIndex = arr.length - 1) {
    if (leftIndex < rightIndex) {
        let pivotIndex = pivot(arr, leftIndex, rightIndex);
        quickSort(arr, leftIndex, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, rightIndex);
    }
    return arr;
}
console.log(quickSort(unsorted));
//# sourceMappingURL=quicksort.js.map