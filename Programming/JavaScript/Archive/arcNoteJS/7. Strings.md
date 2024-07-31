
single  quotes
double quotes
template literals


String is a collection of characters used to store and manipulate text.
Immutable??

```js
let str = "Hello World"
console.log(str);
console.log(str.length); // gets a length of this string

let str2 = 'Single Quote'
console.log(str2);
console.log(str2.length); // gets a length of this string
```

Accessing characters in a string with indices
```js
console.log(str[2]);
str[2] = '2'
console.log(str);```


#### Template Literals (are like f-strings in python) #imp
Also called  String Interpolation
```js
let Anime = "Dororo"
let Rating = 4.89
console.log(`${Anime} has a rating of ${Rating} stars`);
```

works as a partially raw string as well like single and double quotes
```js
console.log(`${Anime} got rating of ${Rating} from "my" side`);
```

#### Escape Sequences 
#discuss 
Execution at [[7. Strings.js]] at last. 

##### String methods
```js
console.log(airline.__proto__); //access all methods with this
```
Access all methods with this, by executing this in browser.

```js
const building = "Twin Towers"
const airline = new String('American Airlines')
console.log(`This \$\{\} act as variable's placeholders. Like building = ${building}, Floors ${112}`);

console.log(airline.__proto__); //access all methods with this


console.log(airline.toUpperCase()); //returns a new string
console.log(airline.charAt(2));
console.log(airline.indexOf('c'));

let gameName = 'LtJade#14521'

console.log(gameName);
console.log(`Length ${gameName.length}`);
console.log(`substring ${gameName.substring(0,4)}`);// always starts from zeroth index
console.log(`Slice ${gameName.slice(7,-3)}`);// cane take neg indices, reads backwards

```

Split method 
```js
let text = "Hello, World!";
let words = text.split(" "); // Splits the string into an array of words
console.log(words); // ["Hello,", "World"]
```
Replace method
```js
let fruit = "I love apples.";
console.log(fruit.replace("apples", "oranges")); // Outputs: "I love oranges."
```
Trim method
```js
let greeting = "   Hello, World   ";
console.log(greeting.trim()); // Outputs: "Hello, World!"
```
Include method 
```js
let text = "Hello, world!";
console.log(text.includes("world")); // Outputs: true
console.log(text.includes("universe")); // Outputs: false
```

