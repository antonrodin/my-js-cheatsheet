function booWho(bool) {
    return (typeof(bool) === "boolean") ? true : false;
}
  
console.log(booWho([1, 2, 3]));