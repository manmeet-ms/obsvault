console.log(Number("123")); // 123
console.log(Number(true)); // 1
console.log(Number(false)); // 0

let num = 123;
console.log(num.toString()); // "123"

num = 123.456;
console.log(num.toExponential()); // "1.234560e+2"

num = 123.456;
console.log(num.toFixed(2)); // "123.46"

num = 123.456;
console.log(num.toPrecision(4)); // Outputs: 123.5
console.log(num.toPrecision(3)); // Outputs: 123
console.log(num.toPrecision(2)); // Outputs: 1.2e+2

let currency = 1000000
console.log(currency.toLocaleString()); 
console.log(currency.toLocaleString('en-IN')); 

console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45



// Mathematical Constants and Values
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN
console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
