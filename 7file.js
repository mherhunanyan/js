/*Գրել ֆունկցիա, որը հաշվում և վերադարձնում է քառակուսային մատրիցի գլխավոր 
անկյունագծից վերև գտնվող տարրերի գումարը (գլխավոր անկյունագծինը ներառյալ)։*/

function foo(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr[i].length; ++j) {
            res += arr[i][j];
        }
    }
    return res;
}

console.log(foo([[1,2,3], [4,5,6]]));