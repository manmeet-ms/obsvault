
#### `map`

The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array. It's used for transforming data.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

#### `filter`

The `filter` method creates a new array with all elements that pass the test implemented by the provided function. It's used for selecting a subset of data based on a condition.

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

#### `reduce`

The `reduce` method executes a reducer function on each element of the array, resulting in a single output value. It's extremely versatile and can be used for summing values, accumulating results, or reducing an array to a single value.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 10
```
