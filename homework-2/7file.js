/*Գրել ֆունկցիա, որը կստանա քառակուսային մատրից և գլխավոր անկյունագծի 
համեմատ կկատարի սիմետրիկ արտապատկերում (արտապատկերումը կատարել նույն 
մատրիցում)։ Այսինքն մատրիցի [i][j] էլեմենտը կհայտնվի [j][i] դիրքում։ Օրինակ՝
1 2 3          1 4 7
4 5 6   =>     2 5 8
7 8 9          3 6 9 */

function foo(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < i; ++j) {
            [arr[j][i], arr[i][j]] = [arr[i][j], arr[j][i]];
        }
    }
    return arr;
}

console.log(foo([[1,2,3],[4,5,6],[7,8,9]]));