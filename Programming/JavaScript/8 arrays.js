myArr=[ 0, 0, [1, 'string', ], 2, 3,'name', true]
console.log(myArr);
// can also be created with this method
arrNew = new Array (1,2,3,2,5)
console.log(arrNew);

let pushArray = [1, 2, 3];// Adds one or more elements to the end of an array and returns the new length of the array.
pushArray.push(4);
console.log(pushArray); // [1, 2, 3, 4]

let popArray = [1, 2, 3, 4];// Removes the last element from an array and returns that element.
let lastElement = popArray.pop();
console.log(lastElement); // 4
console.log(popArray); // [1, 2, 3]

let shiftArray = [1, 2, 3, 4];// Removes the first element from an array and returns that removed element.
let firstElement = shiftArray.shift();
console.log(firstElement); // 1
console.log(shiftArray); // [2, 3, 4]

let unshiftArray = [2, 3, 4];// Adds one or more elements to the beginning of an array and returns the new length of the array.
unshiftArray.unshift(1);
console.log(unshiftArray); // [1, 2, 3, 4]

let includesArray = [1, 2, 3, 4];// Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(includesArray.includes(2)); // true
console.log(includesArray.includes(5)); // false

let indexOfArray = [1, 2, 3, 4];// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(indexOfArray.indexOf(2)); // 1
console.log(indexOfArray.indexOf(5)); // -1

let joinArray = ['Hello', 'World'];// Joins all elements of an array into a string and returns the string.
console.log(joinArray.join(' ')); // "Hello World"

let sliceArray = [1, 2, 3, 4, 5];// Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let slicedArray = sliceArray.slice(1, 3);
console.log(slicedArray); // [2, 3]

let spliceArray = [1, 2, 3, 4, 5];// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
spliceArray.splice(2, 0, 'a', 'b');
console.log(spliceArray); // [1, 2, 'a', 'b', 3, 4, 5]


// #### Concat
// Merges two or more arrays into a new array.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// #### Split
// Splits a string into an array of substrings using a specified separator.

let stringToSplit = "one,two,three";
let splitArray = stringToSplit.split(",");
console.log(splitArray); // Output: ["one", "two", "three"]

// #### Flat
// Flattens nested arrays into a single array up to a specified depth.

let nestedArray = [1, [2, [3, [4, [5, [6, 7], 8], 9], 10]]];
console.log(nestedArray.flat(1)); // Output: [1, 2, [3, [4, [5, [6, 7], 8], 9], 10]]
console.log(nestedArray.flat(2)); // Output: [1, 2, 3, [4, [5, [6, 7], 8], 9], 10]
console.log(nestedArray.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// #### Array.isArray
// Checks if a value is an array.

console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray("hello")); // Output: false

// #### Array.from
// Creates a new array instance from an array-like or iterable object.

let arrayFromString = Array.from("hello");
console.log(arrayFromString); // Output: ["h", "e", "l", "l", "o"]

// #### Array.of
// Creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.

let arrayOfNumbers = Array.of(1, 2, 3);
console.log(arrayOfNumbers); // Output: [1, 2, 3]
