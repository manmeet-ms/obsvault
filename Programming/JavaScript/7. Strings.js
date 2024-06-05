/*chapter 4 
vid 13
single  quotes
double quotes
template literals*/

// String is a collection of characters used to store and manipulate text.
// are Immutable

let str = "Hello World"
console.log(str);
console.log(str.length); // gets a length of this string

let str2 = 'Single Quote'
console.log(str2);
console.log(str2.length); // gets a length of this string

// Accessing characters in a string with indices
console.log(str[2]);
str[2] = '2'
console.log(str);


// IMPORTANT:Template Literals (are like fstrings )
// Syntax
let Anime = "Dororo"
let Rating = 4.89
console.log(`${Anime} has a rating of ${Rating} stars`);
// works as a partially raw string as well like single and double quotes
console.log(`${Anime} got rating of ${Rating} from "my" side`);

/*
ESCAPE SEQUENCES 
...
...
*/

// STRING METHODS
// length method
let name = "Dumbledore"
console.log(name.length); //escape sequences' slash character aren't counted they just used for depiction

// to uppercase
console.log(name.toUpperCase()); //conversion of a string to uppercase

// to lowercase
console.log(name.toLowerCase()); //conversion of a string to lowercase

// slicing 
console.log(name.slice(2, 4)); //conversion of a string to lowercase
console.log(name.slice(2)); //conversion of a string to lowercase
// Returns a section of a string.
// The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end

// replace
console.log(name);
console.log("replaced result:", name.replace("Dum", "Bar")); // Matches the exact characters unlss changes won't be made.

let fname = "John"
let lname = "Doe "
console.log(fname.concat(" Concatenated ",lname, "Done"));

let unmanaged='         Hi!       '
console.log(unmanaged); // trims unecessary whitespaces
console.log(unmanaged.trim());
