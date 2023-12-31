function selectionSort(myData: number[]): number[] {
    for (let i = 0; i < myData.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < myData.length; j++) {
            if (myData[j] < myData[minIndex]) {
                minIndex = j;
            }
        }

        [myData[i], myData[minIndex]] = [myData[minIndex], myData[i]];
    }

    return myData;
}


const myData: number[] = [64, 34, 25, 12, 22, 11, 90, 10];
const mySortedData: number[] = selectionSort(myData);
console.log("Sortiertes Array:", mySortedData);