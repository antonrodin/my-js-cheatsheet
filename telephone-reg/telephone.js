function telephoneCheck(str) {
    let re1 = /^([0-9]){3}-([0-9]){3}-([0-9]){4}/;
    let re2 = /\s/;
    return re1.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));