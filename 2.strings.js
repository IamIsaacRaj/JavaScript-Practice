/* Strings are texts, which are under single , double, back-tick quote. 
 To declare a string, we need a variable name, assignment operator,
 a value under a single quote, double quote, or backtick quote.

Let's see some examples of strings: */

let space = ' '
let language = 'JavaScript'

let firstName = 'Isaac'
let lastName = 'Raj'
let age = 25

let personInfo = 'I am '+  firstName + ' and I am ' + age
console.log(personInfo);

/* Long Literal Strings */
let stringDefination = "Strings are texts, which are under single , double, \
back-tick quote.To declare a string, we need a variable name,assignment operator, \
a value under a single quote, double quote, or backtick quote."

console.log(stringDefination);

/* Escape Sequences in Strings
In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
 */

console.log('In JavaScript and other programming languages \n \
            followed by some characters is an escape sequence. ');

console.log('Tab \t means 8 \t spaces');

console.log('this is backlash symbol (\\)');

console.log('"JavaScript" and other programming languages');

console.log("'JavaScript' and other programming languages");
// To create a template strings, we use two back-ticks
// To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign.
console.log(`"JavaScript" and other programming 'languages' ${language}`);

console.log('The saying \'Seeing is Believing\' isn\'t correct in 2024');