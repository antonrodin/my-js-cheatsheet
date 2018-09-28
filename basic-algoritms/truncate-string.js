function truncateString(str, num) {
    return (num < str.length) ? str = str.substr(0, num) + "..." : str;
}
  
truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);