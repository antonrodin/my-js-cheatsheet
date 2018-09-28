function titleCase(str) {
    return str.toLowerCase().split(" ").map(elem => {
        return elem.charAt(0).toUpperCase() + elem.slice(1);
    }).join(" ");
}
  
console.log(titleCase("I'm a little tea pot"));