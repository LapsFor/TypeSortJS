// Selection Sort 

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;    
        }
    }
    return arr;
}

let testArr = [42, 17, -5, 99, 3, 0, -14, 21, 9];
console.log(selectionSort(testArr));