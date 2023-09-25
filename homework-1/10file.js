//Տրված թվային զանգվածը սորտավորել Quick Sort ալգորիթմով։

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivot = arr[high];
        let i = low;

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }

        [arr[i], arr[high]] = [arr[high], arr[i]];

        quickSort(arr, low, i - 1);
        quickSort(arr, i + 1, high);
    }

    return arr;
}

console.log(quickSort([5, 3, 7, 6, 2, 9]));  // Should output [2, 3, 5, 6, 7, 9]


console.log(foo([5,3,7,6,2,9]));