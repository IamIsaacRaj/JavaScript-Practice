/* 9.trim(): Removes trailing space in the beginning or the end of a string.
    This includes spaces, tabs, and other whitespace characters such as newlines
    syntax : string.trim()
*/

let str = "     JavaScript      "
console.log(str.trim()); // "JavaScript"

// String with Newline and Tab Characters:

let str1 = "\n \t Hello World!\t \n"
console.log(str1);
/* 
"
Hello World!	 

"
*/
console.log(str1.trim()); // "Hello World!"

/* 
    In addition to trim(), JavaScript provides two related methods: 
    trimStart()  and trimEnd() . 
    These methods are used to remove whitespace from the beginning 
    and the end of a string, respectively.
*/
console.log(str.trimStart());// "JavaScript      "
console.log(str.trimEnd()); // "     JavaScript"