"use strict" //treat all JS code as newer version
/**
 Data types are of 2 types
1. Primitive (Call by value, Stack is used) 
- String
- Number
- Boolean
- null
- undefined
- Symbol
- BigInt (Scientific, huge nums)
2. Non-Primitive (Call by reference, heap is used, memory address is given then changes happen directly)
- Arrays
- Objects
- Funtions

 */

let Number_demo = 8;

console.log(Number_demo)

let bigNumber = 546687654879684654165241n // n defines this is a BigIntu
let Bigint_demo = BigInt(6548451684321321);

console.log(bigNumber)
console.log(Bigint_demo)

Bigint_demo = BigInt("4");
console.log(Bigint_demo)
console.log(BigInt("124") + BigInt("124"));
console.log(BigInt("124" + "124"));
console.log(BigInt(124 + 124));

let String_demo = "Anything"; F
console.log(String_demo)

let Symbol_demo = Symbol("Symbol_demo discuss"); // identifies uniqueness of a components, use cases Figma components, differentiating react components 
console.log(Symbol_demo)

let Boolean_demo = true;
console.log(Boolean_demo)

let NULL_demo = null //explicitly definition; //standalone value //intentionally defines empty value
console.log(NULL_demo)

let Undefined_demo = undefined;
console.log(Undefined_demo)
/* indicates the value hasn't been defined yet
unnecessary to declare a variable as undefined 
It is same as uninitialized variable, e.g. let something;
*/

console.log(NULL_demo, Number_demo, String_demo, Symbol_demo, Boolean_demo, Bigint_demo, Undefined_demo);
console.log(BigInt("124") + BigInt("124"));
console.log(BigInt("124" + "124"));
console.log(BigInt(124 + 124));

//  what are objects 
// key value pairs THINK LIKE A JSON (that why we call it JavaScript Object Notation)
console.log("JavaScript Objects");
let InStock2 = 5
const shop = {
    'Flour': '10kg',
    'Soap': 5,
    'Shampoo': 25,
    'Rice': '5kg',
    'Sugar': '2kg',
    'InStock': true, InStock2: true,
    InStock2: 5
}
console.log(shop['Rice']);
console.log(shop['InStock']);
console.log(shop[InStock2]); // This doesn't works why can't we put variables in a JavaScript Objects?


let obj = {
    "Name": 19,
    45: "Groups",
    "Mobile": "8554582120",
    "Weight": 99,
    "Hare": "Turtle",
}
console.log(obj);
console.log("Arey chaaabi kahaan hai!??", Object.keys(obj));
console.log("Obj values: ", Object.values(obj));

let setKey = "Name"
console.log(`A value corresponding to the ${setKey} is ${obj[setKey]} `);
// console.log(obj);

for (let printKeys in obj) {
    console.log(printKeys); // get keys
}


for (let key in obj) {
    console.log(obj[key]); // alternative way to get values; ungli tedhi karni padi 
}


// # typeof() operator
console.log("\ntypeof() operator");
console.log("null is: ", typeof (null)); //gives object? 
/*
The reason `typeof null` returns `"object"` is rooted in the language's history and design decisions. Initially, JavaScript values were represented internally as a type tag followed by a value. 

For objects, the type tag was `0`. When `null` was introduced, it was represented as the NULL pointer (`0x00` on most platforms), which also had a type tag of `0`. As a result, `null` was mistakenly classified as an object type, leading to the behavior where `typeof null` returns `"object"`.

This behavior has been considered a bug since it contradicts the intuitive expectation that `null` should have a type of `'null'`. However, attempts to fix this issue in ECMAScript (the standard upon which JavaScript is based) have been rejected due to concerns about breaking existing code. Therefore, `typeof null` returning `"object"` remains a part of JavaScript's specification.
*/

console.log("undefined is: ", typeof (undefined)); //gives undefined 
console.log("NULL_demo is: ", typeof (NULL_demo));
console.log("Number_demo is: ", typeof (Number_demo));
console.log("String_demo is: ", typeof (String_demo));
console.log("Symbol_demo is: ", typeof (Symbol_demo));
console.log("Boolean_demo is: ", typeof (Boolean_demo));
console.log("Bigint_demo is: ", typeof (Bigint_demo));
console.log("Undefined_demo is: ", typeof (Undefined_demo));
console.log("obj is: ", typeof (obj));
