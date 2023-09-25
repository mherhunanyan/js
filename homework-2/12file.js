// Տրված թվային զանգվածը սորտավորել Selection Sort ալգորիթմով։

function SelectionSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let min = arr[i];
        for (let j = i + 1; j < arr.length; ++j) {
            if (min > arr[j]) {
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
    }
    return arr;
}
console.log(SelectionSort([5,4,10,2,1]));