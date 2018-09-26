function findLongestWordLength(str) {
    let strArr = str.split(" ");
    let max = 0;
    strArr.forEach(elem => {
        max = (elem.length > max) ? elem.length : max ;
    })

    return max;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");