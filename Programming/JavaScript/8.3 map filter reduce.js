// day 20


// higher order array methods


// 1. Map
// creates a new array for performing operation on given array
arr = [19, 2, 34, 23, 4]
arr.map((arg) => {
    console.log("Logging each value", arg * 2);
})
console.log("Original Demo: ", arr); // this didn't reflect the modded array aas we didnt store it anywhere

// As it returns a new array therefore
let a = arr.map((arg) => {
    // console.log(arg * 2);

    return arg * 2 // this feeds the new values in new array
})
console.log("Mapped Values: ", a);

// filter function
let f = arr.filter((param) => {
    return param < 8
})
console.log(f);


// reduce method
red = [1, 2, 3, 4, 5]
let r = red.reduce((arg, arg2)=>{
    console.log(`${arg} + ${arg2} = ${arg + arg2}`)
    return arg + arg2
})
console.log("Result:", r);


let r2 = red.reduce((arg, arg2)=>{
    console.log(`${arg} * ${arg2} = ${arg * arg2}`)
    return arg * arg2
})
console.log("Result:", r2);