//Իրականացնել Binary search որոնման ալգորիթմը։

function BinarySearch(arr, num) {
    arr.sort(function(a, b){return a-b});
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let middle = Math.floor((max + min) / 2); //i dont understand this part why add instead of subtruct
        if (arr[middle] === num) {
            return middle;
        } else if (arr[middle] < num) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }
    return -1;
}
console.log(BinarySearch([4,5,6,7,9], 5));
