/*Գրել ֆունկցիա, որը որպես արգումենտ ստանում է 2 զանգված և վերադարձնում 
դրանք միավորված ու սորտավորված (առանց նոր զանգված վերադարձնելու)։*/

function foo(arr1, arr2) {
    for (let element of arr2) {
        arr1.push(element);
    }
    for (let i = 0; i < arr1.length; ++i) {
        for (let j = 0; j < arr1.length; ++j) {
            if (arr1[i] < arr1[j]) {
                [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
            }
        }
    }
    return arr1;
}

console.log(foo([-1,7,8,5], [5,4,3,-9]));