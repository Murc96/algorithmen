function getDigit(num:number, index:number):number{
    let digit = Math.floor(Math.abs(num) / Math.pow(10, index) % 10) ;

    return digit;
}

function digitCount(num:number):number{
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))+1);
}

function mostDigits (arr:number[]): number{
    let maxDigits = 0;
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        count = digitCount(arr[i]);
        if(count > maxDigits){
            maxDigits = count;
        }
    }
    return maxDigits;
}

console.log(getDigit(-457, 0));
console.log(digitCount(791));

let myUnsortedArr:number[] = [22,555,10,799,5000,74,431,9999,55643];

console.log(mostDigits(myUnsortedArr));

function radixSort(arr:number[]): number [] {
    let maxDigits = mostDigits(arr);
    

    for(let k = 0; k < maxDigits; k++) {
        const buckets: number[][] = Array.from({length:10}, () => []);

        arr.forEach(num => {
            buckets[getDigit(num, k)].push(num);
        })
            
        
        arr = [];

        buckets.forEach(bucket => {
            bucket.forEach(num => {
                arr.push(num);
            })
        }) 
    }

    
    return arr;
}


console.log(radixSort(myUnsortedArr));