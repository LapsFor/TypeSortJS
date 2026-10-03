// buble sort 

let Arr = [1,3,0,4,9,2,5,6,7,8,-10];
let reversedArr = [100, 90, 80, 50, 42, 30, 15, 5, 0, -10, -50];
let sortedArr = [-5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let duplicatesArr = [4, 0, -1, 4, 99, -1, 4, 25, 0, 4];

const BubbleSort = (array) => {
    for(let i = 0; i < array.length - 1; i++){
        let isSwapped = false; // счетчик обменов
        for(let j = 0; j < array.length - 1 - i; j++){   // минус последней индекс, так как после каждой итерации наибольший элемент будет в конце массива, уменьшаем длину
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) { 
            break;
        }
        // если ни одного обмена не было, массив уже отсортирован или если массив отсортирован, то дальнейшие итерации не нужны, выходим из цикла
    }
return array;
}

console.log("BubbleSort: ");
console.log(BubbleSort(Arr));
console.log(BubbleSort(reversedArr));
console.log(BubbleSort(sortedArr));
console.log(BubbleSort(duplicatesArr));

