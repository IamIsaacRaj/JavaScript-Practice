/* 
    String Methods
    Everything in JavaScript is an object.
    A string is a primitive data type 
    that means we can not modify it once it is created.
    The string object has many string methods.
    There are different string methods 
    that can help us to work with strings.
*/

/* 
1.length: The string length method returns 
        the number of characters in a string included empty space.
*/
let str = "JavaScript";
console.log(str.length); // 10

/* 
    2.Accessing characters in a string: 
    We can access each character in a string using its index. 
    In programming, counting starts from 0. 
    The first index of the string is zero,
    and the last index is the length of the string minus one.
*/

console.log(str[0]); // J

let lastIndex = str.length-1
let lastletter = str[lastIndex] // or str[str.length-1] instead of creatng another variable

console.log(lastletter);// t

/*3.toUpperCase(): this method changes the string to uppercase letters. */

let toUpperCase = str.toUpperCase();
console.log(toUpperCase); //JAVASCRIPT
console.log(str.toUpperCase()); // JAVASCRIPT

/*4.toLowerCase(): this method changes the string to lowercase letters. */

let toLowerCase = str.toLowerCase();
console.log(toLowerCase); //javascript
console.log(str.toLowerCase()); //javascript

/*5.slice(): It takes two arguments,
string.slice(startIndex, endIndex)

 Extracts a section of a string and returns it as a new string. */
console.log('slice method o/p');
console.log(str.slice(0,4))  // Java  
console.log(str.slice(4));  // Script
console.log(str.slice(2,-6)); // va
console.log(str.slice(2,4));// va
console.log(str.slice(0,-9));  // J
console.log(str.slice(-6,-4)); // Sc
console.log(str.slice(-6)); //Script

/*6. substring(): It takes two arguments, 
the starting index and the stopping index but 
it doesn't include the character at the stopping index. */

console.log('substring method o/p');
console.log(str.substring(0)); //JavaScript
console.log(str.substring(0,4)); //Java

//in substring method Negative values for the start or end index are treated as 0.

console.log(str.substring(-6)); //JavaScript --> here -6 becomes 0 so entire string is returned

console.log(str.substring(0,-6)); //it gives empty string as -6 becomes 0

/* When the start index is greater than the end index, 
substring() swaps them internally.  */

console.log(str.substring(4,-6)); // Java here 4,-6 --> 4,0--> 0,4
console.log(str.substring(4,0)); // Java  here also 4,0--> 0,4

/*7.split(): The split method splits a string at a specified place.  
    syntax: string.split(separator, limit)
*/
/* separator: Specifies the character or regular expression to use 
for splitting the string. If omitted or undefined, 
the entire string is returned as the only element of the array.

limit: An optional integer specifying the maximum number of splits. 
The split method still splits on every match of the separator,
but it limits the number of items in the returned array to this number.

*/
console.log('SPLIT METHOD OP');
let string = '30 Days Of JavaScript'
console.log(string.split()); // [ '30 Days Of JavaScript' ]

// here space is taken an sepeator so it divides the string based on occurrance of space
console.log(string.split(" ")); //[ '30', 'Days', 'Of', 'JavaScript' ]
// Using a Limit:
console.log(string.split(" ",2)); //[ '30', 'Days' ]

console.log(string.split(",",2)); //[ '30 Days Of JavaScript' ]

console.log(string.split('')); //Splitting on Each Character:
/* [
    '3', '0', ' ', 'D', 'a',
    'y', 's', ' ', 'O', 'f',
    ' ', 'J', 'a', 'v', 'a',
    'S', 'c', 'r', 'i', 'p',
    't'
  ] */

  // taking separators fom given string
  let path = "/home/user/documents/file.txt";
  console.log(path.split("/")); //[ '', 'home', 'user', 'documents', 'file.txt' ]

  let str1 = "Hello1World2JavaScript3";
  console.log(str1.split(/\d/)) //[ 'Hello', 'World', 'JavaScript', '' ]

  let str2 = "apple,banana,cherry";
  console.log(str2.split(",")) //[ 'apple', 'banana', 'cherry' ]