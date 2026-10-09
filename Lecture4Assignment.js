// Remove even numbers
// const arr = [1, 2, 4, 5, 6, 7, 9, 10]
// let x = removeEven(arr)
// console.log(x);
// function removeEven(arr){
// const filtered = arr.filter(element => element % 2 !== 0)
// return filtered
// }

// Remove duplicates
// const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3];
// let a = new Set(arr);
// console.log(a);

// Check for specific number
// let arr = [1, 2, 3, 4, 5];
// b = check(33)
// console.log(b)
// function check(x){
//    z = arr.indexOf(x)
//    if(z == -1){
//     return "false"
//    }
//    else{
//     return "true"
//    }
// }

// convert numbers to letters with objects
const arr = [87, 90, 77, 100, 121];
const result = numbersToObjects(arr)
console.log(result);

function numbersToObjects(arr){
    return arr.map(num => ({
        [num.toString()]: String.fromCharCode(num)
    }));
}
