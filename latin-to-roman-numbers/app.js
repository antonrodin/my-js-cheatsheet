const sym = ["I", "V", "X", "L", "C", "D", "M"];
const val = [ 1,   5,   10,  50,  100, 500, 1000];

function convert(num) {
    
    let i = val.length - 1;
    let res = 0;
    let rem = 0;
    let rom = "";
    let div = 0;
    
    while(i > -1) {
    
        res = Math.floor(num / val[i]);
        rem = num % val[i];
        div = num / val[i];
        
        if (res == 4) {
            num = num - 4 * val[i];
            rom = rom + sym[i] + sym[i+1];
        } else if (res >= 1) {            
            num = num - val[i];
            rom += sym[i];
        } else if((res == 0) && (div >= 0.9) && (1 > div) && (sym[i] != "L") && (sym[i] != "D")) {
            num = rem - 0.9 * val[i];
            rom = rom + sym[i-2] + sym[i];
            i -= 2;  
        } else {
            i--;
        }
    }
        
    return rom;
}

convert(91);