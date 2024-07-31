 [Arrays]((https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays) store multiple values under a single variable name, allowing efficient data management like looping through items
- declared with a `[]`

```
myArr=[ 0, 0, [1, 'string', ], 2, 3,'name', true]
```

arrays are not associative (value can't be accessed with direct values, indexing is used)

copying arrays create results as shallow copies (same reference point in memory)

can also be created with this method
```
arrNew = new Array (1,2,3,2,5)
console.log(arrNew);
```


#### Push
Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

#### Pop
Removes the last element from an array and returns that element.

```javascript
let arr = [1, 2, 3, 4];
let lastElement = arr.pop();
console.log(lastElement); // 4
console.log(arr); // [1, 2, 3]
```

#### Shift
Removes the first element from an array and returns that removed element.

```javascript
let arr = [1, 2, 3, 4];
let firstElement = arr.shift();
console.log(firstElement); // 1
console.log(arr); // [2, 3, 4]
```

#### Unshift
Adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
let arr = [2, 3, 4];
arr.unshift(1);
console.log(arr); // [1, 2, 3, 4]
```

#### Includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```javascript
let arr = [1, 2, 3, 4];
console.log(arr.includes(2)); // true
console.log(arr.includes(5)); // false
```

#### IndexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```javascript
let arr = [1, 2, 3, 4];
console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(5)); // -1
```

#### Join
Joins all elements of an array into a string and returns the string.

```javascript
let arr = ['Hello', 'World'];
console.log(arr.join(' ')); // "Hello World"
```

#### Slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

```javascript
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // [2, 3]
```

#### Splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 'a', 'b');
console.log(arr); // [1, 2, 'a', 'b', 3, 4, 5]
```

**Short Difference Between Slice and Splice:**

- `slice` does not modify the original array but returns a new array.
- `splice` modifies the original array by either removing or adding elements.


#### Concat
Combines two or more arrays and returns a new array.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
```

#### Separator Operator
Splits a string into an array of substrings based on a specified separator.

```javascript
let str = "one,two,three";
let arr = str.split(",");
console.log(arr); // Output: ["one", "two", "three"]
```

#### Flat with Depth Cases
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```javascript
let arr = [1, [2, [3, [4, [5, [6, 7], 8], 9], 10]]];
console.log(arr.flat(1)); // Output: [1, 2, [3, [4, [5, [6, 7], 8], 9], 10]]
console.log(arr.flat(2)); // Output: [1, 2, 3, [4, [5, [6, 7], 8], 9], 10]
console.log(arr.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### IsArray
Checks if a value is an array.

```javascript
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray("hello")); // Output: false
```

#### From
Creates a new array instance from an iterable object.

```javascript
let arr = Array.from("hello");
console.log(arr); // Output: ["h", "e", "l", "l", "o"]
```

#### Of
Creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.

```javascript
let arr = Array.of(1, 2, 3);
console.log(arr); // Output: [1, 2, 3]
```

---

#### High Order Array loops
`for each` overview
- `for of`
- `map`