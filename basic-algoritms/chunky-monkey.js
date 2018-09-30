// Chun the array in pieces with desired size

// Very easy iterator 
function chunkArrayInGroups(arr, size) {
    
    let res = new Array();
    let ini = 0;
    let end = size;

    while(ini < arr.length) {
        res.push(arr.slice(ini, end));
        ini += size;
        end += size;
    }

    return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);