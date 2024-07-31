let a = 10
let b = 3

console.log("a greater than b :", a > b);
console.log("a less than b :", a < b);
console.log("a greater than or equal to b :", a => b); // this somehow turned into a function
console.log("a less than or equal to b :", a <= b); // this is comparison
console.log("a equals b :", a == b);
//results gonna be true false 

console.log("2" > 1); // avoid this type of conversion, to avoid confusion
console.log("02" > 1); // avoid this type of conversion, to avoid confusion

/*JS converts these into numbers and then compares the operands, this is the problem with JS and the reasons typescript is preffered, because
- Typescript doesn't allow the conversion of different data types */

console.log(`${null > 0} null > 0 can be seen as 0 > 0 ${0 > 0}`);
console.log(`${null < 0} null < 0 can be seen as 0 < 0 ${0 < 0}`);
console.log(`${null >= 0} null >= 0 can be seen as 0 >= 0 ${0 >= 0}`);
console.log(`${null == 0} null == 0 can be seen as 0 == 0 ${0 == 0}`);

console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null == 0);
// JS converts null to 0 and then compares 


console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined == 0);

// strict check with `===`
// checks/compares value as well as data type
console.log('strict check with `===`');
console.log("1" === 1);
console.log(1 === 1);
console.log("2" === 1);
console.log(2 === 1);
