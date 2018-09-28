// Not very efficient one, but works... It still iterate the array after find the index
// function getIndexToIns(arr, num) {

//     let index = 0;
//     arr.sort((a, b) => a - b).forEach(elem => {
//         index = (elem >= num) ? index : index + 1;
//     });

//     return index;
// }

// This one is more efficient, only loop through till find the correct element
// Also cant find any better solution fith the findIndex() function because of the -1 and false 0 if the element cant be found...
function getIndexToIns(arr, num) {

    let index = 0;
    arr.sort((a, b) => a - b).find(elem => {
        if(elem >= num) {
            return true;
        } else {
            index++;
            return false;
        }
    });

    return index;
}
  
console.log( getIndexToIns([10, 20, 30, 40, 50], 35) );