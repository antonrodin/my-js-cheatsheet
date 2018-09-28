// function findElement(arr, func) {
//     let num = arr.find(function(elem) {
//         return func(elem);
//     })

//     return num;
// }

// Beter One line solution
function findElement(arr, func) {
    return arr.find(elem => func(elem));
}

findElement([1, 2, 3, 4], num => num % 2 === 0 );