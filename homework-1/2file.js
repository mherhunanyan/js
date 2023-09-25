/*Գրել ֆունկցիա, որը որպես արգումենտ ստանում է զանգված, և վերադարձնում նորը՝ 
միայն պարզ թվերով։*/

function isPrime(a) {
    if (a === 2) return true;
    if (a < 2 || a % 2 === 0 || a % 1 != 0) return false;

    for (let i = 2; i < Math.floor(a / 2); ++i) {
        if (a % i === 0) {
        return false;
        }
    }
    return true;
}

function foo(a) {
    let arr = a;
    let newarr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (isPrime(arr[i])) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

console.log(foo([1, -1, 0, 9, 3, 9, 7, 13, 2, 5.5]));