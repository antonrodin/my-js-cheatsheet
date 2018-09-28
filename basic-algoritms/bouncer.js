// Remove all the "false" elements from any array
// filter() evaluate every element of the array and returns the new array  
// with element that only pass the condition
// In this case, the condition is very simple, because if(NaN) o if(null) returns false
function bouncer(arr) {
    return arr.filter(elem => elem);
}
  
console.log(bouncer([1, null, NaN, 2, undefined]));