function filterArray(array, callback) {
       return array.filter (number => callback(number))
}
   
function isEven(num) {
    if (num % 2 === 0){
        return num
    }
}
   
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = filterArray(numbers, isEven);

console.log(evenNumbers); // Should output [2, 4, 6]
