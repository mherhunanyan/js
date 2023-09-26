// Գրել ֆունկցիա, որը կստուգի, արդյոք տրված թիվը Palindrome է, թե ոչ:

function isPalindrome(num) {
    let res = 0;
    let chlp = num;
    while (chlp !== 0) {
        res = res * 10 + chlp % 10;
        chlp = Math.floor((chlp / 10));
    }
    return num === res;
}

console.log(isPalindrome(11211));

