
let NULL = null //explicitly definition;
console.log(NULL)

let Number = 8;
console.log(Number)

let String  = "Anything";
console.log(String)

let Symbol_demo  = Symbol("Symbol_demo discuss");
console.log(Symbol_demo)

let Boolean  = true;
console.log(Boolean)

let Bigint_demo = BigInt(4);
console.log(Bigint_demo)
Bigint_demo = BigInt("4"); //discuss
console.log(Bigint_demo)


let Undefined = undefined; // unnecessary to declare a variable as undefined 
console.log(Undefined)
//It is same as uninitialized variable, e.g. let something;

console.log(NULL, Number, String, Symbol_demo, Boolean, Bigint_demo, Undefined);
console.log(BigInt("124")+BigInt("124"));
console.log(BigInt("124"+"124"));
console.log(BigInt(124+124));

//  what are objects 
// key value pairs THINK LIKE A JSON (that why we call it JavaScript Object Notation)
console.log("JavaScript Objects");
InStock2=5
const shop = {
    'Flour':'10kg',
    'Soap':5,
    'Shampoo':25,
    'Rice':'5kg',
    'Sugar':'2kg',
    'InStock':true,InStock2:true,
    InStock2:5
}
console.log(shop['Rice']);
console.log(shop['InStock']);
console.log(shop[InStock2]); // This doesn't works why can't we put variables in a JavaScript Objects?


let obj={
    "Name":19,
    45:"Groups",
    "Mobile":"8554582120",
    "Weight":99,
    "Hare":"Turtle",
}
console.log(obj);
console.log("Arey chaaabi kahaan hai!??", Object.keys(obj));
console.log("Obj values: ", Object.values(obj));

setKey="Name"
console.log(`A value corresponding to the ${setKey} is ${obj[setKey]} `);
// console.log(obj);

for (let printKeys in obj){
    console.log(printKeys); // get keys
}


for (let key in obj){
    console.log(obj[key]); // alternative way to get values; ungli tedhi karni padi 
}

