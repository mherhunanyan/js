// Ֆունկցիային փոխանցել թիվ, տպել էկրանին թվի թվանշանների արտադրյալը։

function foo(num) {
    let res = 1;

    while (num != 0) {
        res = res * (num % 10);
        num = Math.floor(num / 10);
    }
    return res;
}
console.log(foo(323));