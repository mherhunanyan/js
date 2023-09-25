// Տրված թվային զանգվածը սորտավորել Bubble Sort ալգորիթմով։

function BubbleSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(BubbleSort([5,4,3,2,1,9]));
