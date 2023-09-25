// 3. Գրել ֆունկցիա, որը կստուգի երկու նույն չափի զանգվածները նույնն են, թե ոչ։

function foo(arr, arr1) {
    if (!(arr.length === arr1.length)) {
        return;
    }
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== arr1[i]) {
            return false;
        }
    }
    return true;
}
console.log(foo([1,2,3], [1,2,3]));