// This solution works, but is not very eficient, because the algorithm runs till
// the end of the array. It should stop then found the first case.
// function mutation(arr) {
//     arr[0] = arr[0].toLowerCase();
//     arr[1] = arr[1].toLowerCase();
//     let first = arr[0].split("");
//     let found = false;

//     arr[1].split("").forEach(element => {
//         if(!first.includes(element)) {
//             found = true;
//         }
//     });

//     return !found;
// }

// More eficient solution. It runs till find the first element that matches.
function mutation(arr) {
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    let first = arr[0].split("");

    let found = arr[1].split("").find(element => {
        return !first.includes(element);
    });

    return (found) ? false : true;
}
  
mutation(["hello", "Hello"]);