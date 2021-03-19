/**
 * @author Jesse Goerzen <jdgoerzen@gmail.com>
 * @version 1.0.0
 * @file outputs a random arrangement of integers 1 through 10000 inclusive to the console.
 * @requires randomTenK.js
 */
// import randomTenK function.
const randomTenK = require('./randomTenK.js');

// output the output of the function formatted into a string.
console.log(randomTenK.randomTenK().join("\n"));