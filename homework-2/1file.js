// Գրել ֆունկցիա, որը կստուգի, արդյոք տրված թիվը Palindrome է, թե ոչ:

function foo(num) {
    let compare = num;
    let res = 0;
    while (num != 0) {
        res = res * 10 + num % 10;
        num = Math.floor(num / 10); 
    }
    if (res === compare) {
        return true;
    }
    return false;
}
console.log(foo(121));