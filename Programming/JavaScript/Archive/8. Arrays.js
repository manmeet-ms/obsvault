// Collection Of Some Items
let arr = ["item", 2, 3.0, 4, true, false]
console.log(arr);

// Accessing Array Elements
console.log(arr[2]);


/* length method */
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
let marks = [2, 6, 6, 8]

console.log("Arr Before: ", marks)
marks[2] = 143
console.log("Arr After: ", marks)

console.log();
/* Array Methods */

/* toString method */
console.log(arr.toString);
console.log(arr.toString()); // returns A String


/* join method (Join The Elements With A Separator Defined )*/
console.log(arr.join(" ")); // returns A String 


/* pop method */
console.log("\nBefore", arr); // Original Array Modifier
arr.pop() // This Removes The Last Items From The Array
console.log("After removal:", arr);
console.log(`Now Length is ${arr.length}`);


/* push method */
console.log("\nBefore", arr); // Original Array Modifier
arr.push("lastpush") // Adds Item In An Array at Last
console.log("After addition:", arr);
console.log(`Now Length is ${arr.length}`);


/* shift method */
console.log(arr.shift()); // Removes First From The Array And returns It
console.log(arr); // Array After Original Array Modifier

/* unshift method */
console.log(arr.unshift("Strt")); // Adds A Items At The Beginning Of The Array And returns It
console.log(arr); // Array After Original Array Modifier


/* delete method #imp */
// array length is not affected in this 
arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr2);
delete arr2[0]
console.log(arr2);

/* concat method */
console.log(arr.concat(arr2)); //more arrays can be added with a comma

/* sort method */
let unsorted = [3, 45, 5, 96, 654, 23, 6]
console.log(unsorted);
console.log(unsorted.sort()); //sorts ALPHABETICALLY considers items as strings
// Existing Array Modifier
console.log(unsorted);
// to sort numerically
// a compare function is used
let compare = (a, b) => {
    return a - b
}
console.log(unsorted.sort(compare));

/*reverse method*/
// simply reverses an original Array


/*splice method*/ // Level ups the insertion game 
arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// splice_demo= arr2.splice(starting_index, no_of_items_to_remove, items_addition)

splice_demo = (arr2.splice(4, 2, 1033, 1034, 1035)) // we can insert as many values as we want then
console.log(splice_demo); //returns deleted items

console.log(arr2); //Result: array modified

/*slicing method*/
// same as list slicing in python
arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr2.slice(2, 4)); // last not included
// doesnt modifies array