/*
when we create objects, they can be 
object literals
constructor methods, singleton is produced
Object.create method
*/

// object literals
const user = {
    name: 'Shin', // default taken as "name"
    "full name": 'Shin Tenese', // default taken as "name"
    age: Infinity,
    lastLogin: ['Monday', 'Saturday']

}
console.log(user);

// accessing methods
console.log(`Typical method: ${user.name}
\"Right\" method: ${user["name"]}
Also help in accessing such variables such as \"full name\" : ${user["full name"]}

${user.lastLogin}
${user['lastLogin']}

`);


//how to define Symmbol in JS
let frstSym = Symbol('SSNkey325486')
console.log(typeof frstSym);

const defineSymbol = {
    [frstSym]: 'SSNkey325486', // referring to declared/defined Symbol first
}
console.log(defineSymbol); // Output: { [Symbol(SSNkey325486)]: 'SSNkey325486' }
console.log(defineSymbol[frstSym]);

console.log(typeof defineSymbol[frstSym]); // no string in accessing as it's a Symbol 


// updating values 
console.log(user.age);
user.age = 99;
console.log(user.age);


// if we dnt want to limit the changes on the object we use Object.freeze
// changes won't propagate
console.log(user["full name"]);
user["full name"] = 'Name changed'
console.log(user["full name"]);
Object.freeze(user)

user["full name"] = 'XYZ again' // Won't propagate, though we won't get any errors
console.log(user["full name"]);




// funtions in objects 
const funcObj = {
    name: 'Kofu',
    age: 2,
    greet: function () {
        console.log('defnined inside, this will result anonymous because no funcName is def');
    },
    greetWithName: function withName() {
        console.log('defnined inside, this took name|reference function withName()');
    }
}

funcObj.greetOut = function () {
    console.log('this will append in object as it\'s not freezed, function by defnining outside, same case of anonymity');

}

funcObj.greetOutArrow = () => {
    console.log('this will append in object as it\'s not freezed, arrow function by defnining outside');

}
console.log(funcObj);
funcObj.greet() // brackets indicated to execute the function
funcObj.greetWithName()
funcObj.greetOut()
funcObj.greetOutArrow()



// ## Nested objects 
let nest = {
    bird: 'sparrow',
    color: {
        red: 'red',
        green: 'green',
        otherHex: 'otherHex',
    },
    feather: {
        wings: 1000,
        tails: 1000,
        kalgi: 1000,
    }
}
// accessing can be done depth acheived with `var.and.and.and`
const obj1 = { a: ['A', 'B'] };
const obj2 = { a: ['C'], b: ['D'] };
const mergedObj = { ...obj1, ...obj2 }; // Shallow merge
console.log(mergedObj); // {a: ['C'], b: ['D']}
