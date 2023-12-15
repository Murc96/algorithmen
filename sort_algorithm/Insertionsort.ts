function insertionSort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
        const key: number = arr[i];
        let j: number = i - 1;
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

const myArray: number[] = [12, 11, 13, 5, 6];
insertionSort(myArray);

console.log("Sortiertes Array:", myArray);
