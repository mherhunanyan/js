// Գրել ֆունկցիա, որը որպես արգումենտ ստանում է զանգված և այդ զանգվածի 
// վերջին տարրը մեծացնում 1֊ով ([9]-ի դեպքում [1, 0] է վերադարձնում)։

function foo(arr) {
    if (arr[arr.length - 1] === 9) {
        arr[arr.length - 1] = 1;
        arr.push(0);
    } else {
        arr[arr.length - 1] = arr[arr.length - 1] + 1;
    }
    return arr;
}
console.log(foo([1,2,3,4,5,6,7,8,9]));