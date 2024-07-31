// most of the time data is received in the form of string (not everytime)
// type conversion is necessary while working in backend to avoid unexpected results when data is coming from frontend (sources can be forms or whatever) is properly converted.

let score = 33
let valueInNumber = Number(score)
console.log(`\nValue => ${score} Type =>  ${typeof score}`);
console.log(`Value => \`${valueInNumber}\`. Type => ${typeof valueInNumber}`);

score = "33"
valueInNumber = Number(score)
console.log(`\nValue => ${score} Type =>  ${typeof score}`);
console.log(`Value => \`${valueInNumber}\`. Type => ${typeof valueInNumber}`);

score = "33abc"
valueInNumber = Number(score)
console.log(`\nValue => ${score} Type =>  ${typeof score}`);
console.log(`Value => \`${valueInNumber}\`. Type => ${typeof valueInNumber}`);

score = true
valueInNumber = Number(score)
console.log(`\nValue => ${score} Type =>  ${typeof score}`);
console.log(`Value => \`${valueInNumber}\`. Type => ${typeof valueInNumber}`);

score = null
valueInNumber = Number(score)
console.log(`\nValue => ${score} Type =>  ${typeof score}`);
console.log(`Value => \`${valueInNumber}\`. Type => ${typeof valueInNumber}`);

score = undefined
valueInNumber = Number(score)
console.log(`\nValue => ${score} Type =>  ${typeof score}`);
console.log(`Value => \`${valueInNumber}\`. Type => ${typeof valueInNumber}`);
/*
33 => 33
"33" => 33
"33abc" => NaN
true => 1
false => 0
null => 0
undefined => NaN

 */


let isLoggedIn = 1
let convertBool = Boolean(isLoggedIn)
console.log(`\nValue => ${isLoggedIn} Type =>  ${typeof isLoggedIn}`);
console.log(`Value => \`${convertBool}\`. Type => ${typeof convertBool}`);

isLoggedIn = 0
convertBool = Boolean(isLoggedIn)
console.log(`\nValue => ${isLoggedIn} Type =>  ${typeof isLoggedIn}`);
console.log(`Value => \`${convertBool}\`. Type => ${typeof convertBool}`);

isLoggedIn = "" // an empty string
convertBool = Boolean(isLoggedIn)
console.log(`\nValue => ${isLoggedIn} Type =>  ${typeof isLoggedIn}`);
console.log(`Value => \`${convertBool}\`. Type => ${typeof convertBool}`);

isLoggedIn = "any non-empty string"
convertBool = Boolean(isLoggedIn)
console.log(`\nValue => ${isLoggedIn} Type =>  ${typeof isLoggedIn}`);
console.log(`Value => \`${convertBool}\`. Type => ${typeof convertBool}`);


isLoggedIn = null
convertBool = Boolean(isLoggedIn)
console.log(`\nValue => ${isLoggedIn} Type =>  ${typeof isLoggedIn}`);
console.log(`Value => \`${convertBool}\`. Type => ${typeof convertBool}`);

isLoggedIn = undefined
convertBool = Boolean(isLoggedIn)
console.log(`\nValue => ${isLoggedIn} Type =>  ${typeof isLoggedIn}`);
console.log(`Value => \`${convertBool}\`. Type => ${typeof convertBool}`);

/*
1 => `true`
0 => `false`
empty string => `false`
any non-empty string => `true`
null => `false`
undefined => `false`
*/

let varNumber = 85
let convertedString = String(varNumber)
console.log(`Value => \`${varNumber}\`. Type => ${typeof varNumber}`);
console.log(`Value => \`${convertedString}\`. Type => ${typeof convertedString}`);


// Operations
let a = 10
let b = 3

console.log("a + b :", a + b);
console.log("a - b :", a - b);
console.log("a * b :", a * b);
console.log("a / b :", a / b);
console.log("a ** b :", a ** b);
console.log("a % b :", a % b);
console.log("a++ :", a++);
console.log("a-- :", a--);

// some tricky conversions
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 1);
console.log(1 + 2 + "1");
// refer to ecmascript documnetation for conversion alogs and precedence

console.log(3 + 4 * 5 % 3); // use parentheses or readability! 

console.log(`true => ${true}`);
console.log(`+true => ${+true}`);
console.log(+"");
// not production grade code

// prefix and postfix operations JS MDN
let gameCoutner = 100
console.log(gameCoutner);
gameCoutner++
console.log(gameCoutner);
