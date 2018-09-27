function repeatStringNumTimes(str, num) {
    let res = "";
    for(let i = 0; i < num; i++) {
        res += str;
        console.log(res);
    }

    return res;
}


repeatStringNumTimes("abc", 3);