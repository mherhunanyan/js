// Գրել ֆունկցիա, որը հաշվում և վերադարձնում է քառակուսային մատրիցի 
// բոլոր տարրերի գումարը:

function foo(arr) {
    if (!arr.length) return;
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr[i].length; ++j) {
            sum = sum + arr[i][j];
        }
    }
    return sum;
}
console.log(foo([[1,2,3],[1,2,3]]));