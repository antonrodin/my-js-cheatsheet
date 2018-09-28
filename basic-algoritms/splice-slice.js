function frankenSplice(arr1, arr2, n) {
    // The slice(ini, end) function returns an a copy from ini to end
    // in this case the whole array without any arguments
    let res = arr2.slice();
    arr1.forEach(elem => {
        res.splice(n, 0, elem);
        n++;
    });

    return res;
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);