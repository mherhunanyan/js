// Binary search (իտերատիվ տարբերակներով)։

function BinarySearch(arr, num) {
    let min = 0;
    let max = arr.length - 1;
    for (let i = 0; i < arr.length; ++i) {
        let mid = Math.floor((max + min) / 2);
        if (num < arr[mid]) {
            max = mid - 1;
        } else if (num > arr[mid]) {
            min = mid + 1;
        } else {
            return mid;
        }
    }
    return mid;
}
console.log(BinarySearch([1,2,3,4,5], 5));