function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i];
        let j = i - 1; // индекс предыдущего элемента
        while(j >= 0 && arr[j] > temp){ // пока предыдущий элемент больше текущего и не дошлт до начала массива [0]
            arr[j + 1] = arr[j]; // сдвигаем элемент вправо
            j--;
        }
        arr[j + 1] = temp; // вставляем элемент на нужную позицию
    }
    return arr;
}

let testArr = [5, 3, 4, 1, 9, -2, 0];
console.log(insertionSort(testArr));