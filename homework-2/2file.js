//  Գրել ֆունկցիա, որը որպես արգումենտ ստանում է զանգված և վերադարձնում 
// այդ զանգվածի մեծագույն և փոքրագույն տարրերի  ինդեքսների տարբերություն:

function Indexdiffernce(arr) {
    if (!arr.length) return null;

    let maxIndex = 0;
    let minIndex = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    
    return Math.abs(maxIndex - minIndex);
}
console.log(Indexdiffernce([1,2,3,4,5]));