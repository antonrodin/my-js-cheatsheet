const ini = 65;
const end = 90;

function rot13(str) {
    
    let res = [];
    let mod = 0;

    for(let i = 0; i < str.length; i++) {
        
        let element = str.charAt(i);
        let asci = element.charCodeAt(0);

        if(asci >= ini & asci <= end) {
            mod = ((element.charCodeAt() - 65) + 13) % 26;
            res.push(String.fromCharCode(65 + mod));
        } else {
            res.push(element);
        }

    }

    str = res.join("");

    return str;
}

rot13("SERR PBQR PNZC");