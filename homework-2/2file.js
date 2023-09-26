//  Գրել ֆունկցիա, որը որպես արգումենտ ստանում է զանգված և վերադարձնում 
// այդ զանգվածի մեծագույն և փոքրագույն տարրերի  ինդեքսների տարբերություն:

function getMaxIndex(arr) {
    let maxIndex = 0;
    for (let i = 1; i < arr.length; ++i) {
        if (arr[maxIndex] < arr[i]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}
function getMinIndex(arr) {
    let minIndex = 0;
    for (let i = 1; i < arr.length; ++i) {
        if ( arr[minIndex] > arr[i]) {
            minIndex = i;
        }
    }
    return minIndex;
}

function indexDiffernce(arr) {
    return getMaxIndex(arr) - getMinIndex(arr);
}
console.log(indexDiffernce([1, -5, -10, 200, 0])); // 1