function confirmEnding(str, target) {
    
    let length = target.length;
    let ini = str.length - length;
    let ending = str.substr(ini, ini + length);

    return (ending == target) ? true : false;
  }
  
  confirmEnding("Bastian", "n");