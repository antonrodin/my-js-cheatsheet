function destroyer(arr) {
  // Remove all the values

  for(let i = 1; i < arguments.length; i++) {
    let j = 0;
    while(j < arr.length) {
      if(arguments[i] == arr[j]) {
        arr.splice(j, 1);
      } else {
        j++;
      }
    }
  }

  return arr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);