### Notes on Number Object's Methods

The `Number` object in JavaScript provides several methods for converting and formatting numbers. Here are some key methods along with examples:

###### Number()
*Explicitly* converts a variable to a number.
```javascript
console.log(Number("123")); // 123
console.log(Number(true)); // 1
console.log(Number(false)); // 0
```

Converts a number to a string.
```javascript
let num = 123;
console.log(num.toString()); // "123"
```

###### toExponential()
Converts a number to exponential notation.
```javascript
let num = 123.456;
console.log(num.toExponential()); // "1.234560e+2"
```

###### toFixed()
Converts a number to a string, keeping a specified number of decimals.
```javascript
let num = 123.456;
console.log(num.toFixed(2)); // "123.46"
```
Used in ecommerce store to control the results of calculation upto a certain readable figures.
###### toPrecision()
Converts a number to a string, keeping a specified total number of digits (significant figures).
```javascript
let num = 123.456;
console.log(num.toPrecision(4)); // Outputs: 123.5
console.log(num.toPrecision(3)); // Outputs: 123
console.log(num.toPrecision(2)); // Outputs: 1.2e+2
```

- `num.toPrecision(4)` rounds to nearest whole number, showing precision up to 4 significant figures.
- `num.toPrecision(3)` shows precision up to 3 significant figures, truncating the decimal part.
- `num.toPrecision(2)` uses scientific notation for precision up to 2 significant figures, showing "1.2e+2".

###### toLocaleString()
```js
let currency = 1000000;
console.log(currency.toLocaleString()); // 1,000,000
console.log(currency.toLocaleString('en-IN')); // 10,00,000
```

Parse a string and return an integer or a floating-point number.
```javascript
console.log(Number.parseInt("123.45")); // 123

// can also be used as (w/o number) 
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45
```

### Mathematical Constants and Values

The `Number` object also defines several constants and values for mathematical operations:

- `Number.MAX_VALUE`: The largest finite number.
- `Number.MIN_VALUE`: The smallest positive number.
- `Number.POSITIVE_INFINITY`: Represents positive infinity.
- `Number.NEGATIVE_INFINITY`: Represents negative infinity.
- `Number.NaN`: Stands for "Not a Number".
- `Number.EPSILON`: The difference between 1 and the smallest value greater than 1 that is representable.
- `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`: Represent the minimum and maximum safe integers in JavaScript.
```javascript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN
console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

These methods and constants provide a robust set of tools for working with numbers in JavaScript, facilitating conversions, formatting, and mathematical operations.


---
### Math Library Examples

The `Math` object provides mathematical constants and functions.

###### Constants
```javascript
console.log(Math.PI); // Approximately 3.14159
console.log(Math.E); // Euler's number, approximately 2.71828
```

###### Functions
```JS
// Absolute Value
console.log(Math.abs(-5)); // 5 (Negative values go positive)

// Round
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

// Round up and down
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.4)); // 4

// Sign
console.log(Math.sign(-4)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(4)); // 1

// Logarithm
console.log(Math.log(1000)); // Natural logarithm of 1000

// Square Root
console.log(Math.sqrt(16)); // Square root of 16

```