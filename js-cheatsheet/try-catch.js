// Try Catch, if any shit happens, the APP continue working!
// Awesome Shit for debugging
// Should use all the fucking TIME

try {

    // Produce a ReferenceError, because myFunctions dont exists
    // myFunction();

  if(!false) {
    // Throw custom error
    throw new SyntaxError('Custom error');
  }

} catch(e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');