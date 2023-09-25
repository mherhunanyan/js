// Գրել ֆունկցիա, որը որպես արգումենտ կստանա զանգված և կվերադարձնի այդ նույն զանգվածը առանց 
// սխալ արժեքները (falsy value) պարունակելու:

function foo(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i]) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(foo([0,"",3,4,9,""]));