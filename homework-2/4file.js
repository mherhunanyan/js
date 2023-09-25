// Ստուգել արդյոք տրված օբյեկտը դատարկ է թե ոչ։

function foo(obj) {
    let iterate = 0;
    for (let key in obj) {
        ++iterate;
    }
    
    if (iterate) return "is Not empty";
    return null;
}
console.log(foo({}))