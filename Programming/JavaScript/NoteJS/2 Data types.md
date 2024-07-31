 Data types are of 2 types
1. **Primitive (Call by value, Stack is used)** 
- String
- Number
- Boolean
- null
- undefined
- Symbol
- BigInt (Scientific, huge nums)
2. **Non-Primitive (Call by reference, heap is used, memory address is given then changes happen directly)**
- Arrays
- Objects
- Functions
 
```js
"use strict" //treat all JS code as newer version
```
If we write it at the start of the file, not that much necessary in modern times

[tc39.es](https://)

There are seven types (*pneumonic - NN SS BB U*)

### 1. `null`\
- explicit definition
- standalone value
- intentionally defines empty value
```js
let NULL = null 
console.log(NULL)
```
```Output
null
```

### 2. Number
```js
let Number = 8;
console.log(Number)
```
```Output
8
```

### 3. String
```js
let String  = "Anything";
console.log(String)
```
```Output
Anything
```

### 4. `Symbol()`
identifies uniqueness of a components, use cases Figma components, differentiating react components 
```js
let Symbol_demo  = Symbol("Symbol_demo discuss");
console.log(Symbol_demo)


let id = Symbol('123')
let anotherId = Symbol('123')
console.log(id===anotherId);
```
```Output
Symbol(Symbol_demo discuss)
false
```
Even though the values are same in `id` variable and `anotherId` variable, everytime a unique component will be produced, whenever `Symbol()` will be used for vars. That's why result was false. 

### 5. Boolean
```js
let Boolean  = true;
console.log(Boolean)
```
```sh
true
```

### 6. `Bigint()`
```js
let bigNumber = 546687654879684654165241n // n defines this is a BigIntu
let Bigint_demo = BigInt(6548451684321321);
console.log(bigNumber)
console.log(Bigint_demo)

Bigint_demo = BigInt("4"); 
console.log(Bigint_demo)
```
```Output
546687654879684654165241n
6548451684321321n
4n
```
used in stock market analysis,etc. js handles very  big number by `BigInt`

**How do they differ?**
```js
console.log(BigInt("124") + BigInt("124"));
console.log(BigInt("124" + "124"));
console.log(BigInt(124 + 124));
```
```sh
248n
124124n
248n
```
- **Case 1:** convers addition of BigInt strings, statement converts the string literals `"124"` to `BigInt` values using `BigInt()` constructor. Then, it performs addition on these `BigInt` values.
- **Case 2:** Concatenation of BigInt Strings, result obviously BigInt
- **Case 3:** Addition of BigInt and Primitive Number This statement adds the numbers 124 and 124 together, and then converts the sum to a BigInt using the `BigInt()` constructor.
### 7. `undefined`
```js
let Undefined = undefined; 
console.log(Undefined)
```
```Output
undefined
```

Unnecessary to declare a variable as `undefined`. It is same as uninitialized variable, e.g. `let something;

# JavaScript Objects
Non-primitive data types. 
#discuss what are objects 
*key:value, pairs THINK LIKE A JSON (that why we call it JavaScript Object Notation)*
```js
console.log("JavaScript Objects");
InStock=false
const shop = {
    'Flour':'10kg',
    'Soap':5,
    'Shampoo':25,
    'Rice':'5kg',
    'Sugar':'2kg',
    'InStock':true
}
console.log(shop['Rice']);
```


#discuss JavaScript Object Methods

#### Accessing values corresponding to a specific key

```js
setKey="Name"
console.log(`A value corresponding to the ${setKey} is ${obj[setKey]} `);
```

#### Getting all the keys

```js
Object.keys(object_json_lke));
```

```js
console.log("Arey chaaabi kahaan hai!??", Object.keys(data));
```
#### Questions...

```js
console.log(shop[InStock2]); // This doesn't works... Output as undefined 
```
Why can't we put variables in a JavaScript Objects? See around line 46 at [[2. Primitive data types.js | Source file]].

#discuss how to access, update objects in a JavaScript Object

```js
obj['new_Key'] = 'new_val'
// OR
obj['pick_Key'] = 'updated_val'
```
A new key will be created if not exist and will be updated otherwise, though we can update existing keys as well.

#discuss why it sometimes print inline
```sh
{ word: 'meaning', word1: 'meaning1', word2: 'meaning2' }
```
& sometimes like this with line breaks
```sh
{
  word: 'meaning',
  word1: 'meaning1',
  worgd2: 'meaning2',
  worgdsd2: 'meaning2',
  wordfgd2: 'meaning2'
}
```



something like this 
if items <=3 i prints in inline style, otherwise with line breaks *(doesn't matters at all)*


> [!important] Important for strings @RHS
> Explicitly enclose with quotes if we have to declare a string at RHS. Generally advised to enclose every string to avoid confusions.


 #discuss are commas neccessary to add at the end of the object?