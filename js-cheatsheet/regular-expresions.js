let re;

// Literal Characters
re = /hello/;           // Look for exact math of 'hello' inside any sentence
re = /hello/i;          // Upper or lowercase

// Metacharacter Symbols
re = /^h/i;             // Must start with 'h'
re = / world$/i;        // Must ends with 'world'
re = /^hello$/i;        // Must begin and end with ... exact match of 'hello'
re = /h.llo/i;          // Matches any ONE character ... may be hello, hillo, hhllo
re = /h*llo/i;          // Matches any character 0 or more times may be heeello, hiiiillo, hllo
re = /gre?a?y/i;        // Optional character... may be grey, gray or gry NOT 'gr5y'
re = /gre?a?y\?/i;      // Escape character.. Escape characters like ?, !, . with \


// Brackets [] - Character Sets
re = /gr[ae]y/i;        // Must be an a or e
re = /[GF]ray/i;        // Must be a G or F
re = /[^GF]ray/i;       // Match anything except a G or F
re = /[A-Z]ray/;        // Match any uppercase letter
re = /[a-z]ray/;        // Match any lowercase letter
re = /[A-Za-z]ray/;     // Match any letter
re = /[0-9][0-9]ray/;   // Match any digit
re = /[a-zA-Z0-9_]/;    // You can add inside brackets any condition

// Braces {} - Quantifiers
re = /Hel{2}o/i;        // Must occur exactly {m} amount of times, only the letter 'l'... Like 'Hello' not 'Helllo'
re = /Hel{2,4}o/i;      // Must occur between N and M Times {n,m}. Can be 'Hello', 'Helllo' or 'Hellllo'
re = /Hel{2,}o/i;       // Must occur at least {m} times Can be 'Hello', 'Helllo' but no 'Helo'

// Paretheses () - Grouping
re = /^([0-9]x){3}$/    // Matchc something liki than '5x4x3x'

// Shorthand Character Classes
re = /\w/;              // Word character, -, alphanumeric or _ ONLY ONE
re = /\w+/;             // + = ONE or MORE
re = /\W/;              // Non-Word character
re = /\d/;              // Match any digit
re = /\d+/;             // Match any digit 0 or more times
re = /\D/;              // Match any Non-digit
re = /\s/;              // Match whitespace char
re = /\S/;              // Match non-whitespace char
re = /Hell\b/i;         // Word boundary, check for word like 'Hell' not 'Hello' inside a phrase

// Assertions
re = /x(?=y)/;          // Match x only if followed by y 'dkjekdxydjekdj',  returns true
re = /x(?!y)/;          // Match x only if NOT followed by y, 'dkjekdxydjekdj' returns false


//Functions

test(re);               // returns: true | false.
exec(re);               // returns: 
                        // 1: the "found result" (string), 
                        // 2: index of "found" (numeric) 
                        // 3: "sentence" (string)

//Match
re = /Hello/;
let str = "Hello there"
let result = str.match(re);     // Returns result array like exec or NULL
console.log(result);

//Seatch
re = /Hello/;
let str = "John Hello there"
let result = str.search(re);     // Returns index of the first match or -1, if not found 
console.log(result);

//Replace
re = /Hello/;
let str = "John Hello there"
let result = str.replace(re, 'hi');     // Returns the new string, 'John hi there'
console.log(result);