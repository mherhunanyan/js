/* 6. Գրել ֆունկցիա, որը հաշվում և վերադարձնում է քառակուսային մատրիցի 
գլխավոր անկյունագծից վերև գտնվող տարրերի գումարը (գլխավոր անկյունագծինը 
ներառյալ)։*/

function foo(arr) {
    if (!arr.length) return;
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr[i].length; ++j) {
            sum = sum + arr[i][j];
        }
    }
    return sum;
}
console.log(foo([[1,2,3],[4,5,6],[7,8,9]]));