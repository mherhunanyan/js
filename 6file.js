/*Գրել ֆունկցիա, որը որպես արգումենտ ստանում է զանգված, և վերադարձնում այդ 
զանգվածի ամենաերկար աճող հաջորդականությունը։*/

function foo(arr) {
    if (arr.length === 0) {
        return [];
    }
    let current = [arr[0]];
    let longest = [arr[0]];

    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > arr[i - 1]) {
            current.push(arr[i]);
        } else {
            current = [arr[i]];
        }
        
        if (current.length > longest.length) {
            longest = current.slice();
        }
    }
    return longest;
}

console.log(foo([6,5,4,2,8,9,]));