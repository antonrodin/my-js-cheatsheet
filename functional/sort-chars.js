function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort((a, b) => {
        return (a > b) ? true : false;
    });
    // Add your code above this line
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));