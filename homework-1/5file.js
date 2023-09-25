/*Գրել ֆունկցիա, որը որպես արգումենտ կստանա զանգված, դրա էլեմենտները կդարձնի 
օբյեկտի արժեքներ (value), որն էլ կվերադարձնի։*/

function foo(arr) {
    let obj = {};
    for (let key of arr) {
        obj[key] = key;
    }
    return obj;
}

console.log(foo([1,"2", 4]));