/*Գրել ֆունկցիա, որը ստանում է թվերի զանգված և վերադարձնում է նույն զանգվածը, որի զույգ թվերը 
բարձրացված են քառակուսի աստիճան( լուծումը գրել պարտադիր forEach( ) -ով:
Example. [ 1, 2, 3, 4, 5 ]
Output. [ 1, 4, 3, 16, 5 ]  */

function squareEvenNumbers(arr) {
    arr.forEach((value, index) => {
        if (value % 2 === 0) {
            arr[index] = value * value;
        }
    });
    return arr;
}

console.log(squareEvenNumbers([1, 2, 3, 4, 5]));