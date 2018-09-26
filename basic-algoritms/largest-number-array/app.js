function largestOfFour(arr) {
    
    let maxArr = new Array();
    arr.forEach(xElem => {
        let max = xElem.pop();
        xElem.forEach(yElem => {
            if(yElem > max) { max = yElem; }
        });
        maxArr.push(max);
    });
    
    console.log(maxArr);
    return maxArr;
}
  
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);