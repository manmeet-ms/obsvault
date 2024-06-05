str_plus_int = 4 + "3"
console.log(str_plus_int);

console.log(typeof (str_plus_int));

const obj = { "word": "meaning", "word1": "meaning1", "word2": "meaning2" }

// AN ALTERNATIVE WAY TO_REPRESENT_JAVASCRIPT_OBJECT DATA; DOESN'T MATTER WORKS EITHER WAY
const obj2 = {
    "word": "meaning",
    "word1": "meaning1",
    "word2": "meaning2",
}
console.log(obj);

// obj = 3 // Can't change a const
// obj = {} // Can't assign a new object to a const 
// console.log(obj);



// a constant's value can't be changed but WE CAN add a key in a 'const'
obj['newKey'] = 'newval'
console.log(obj);
obj['pickKey'] = 'anotherval'
console.log(obj);
obj['pickKey'] = 'prevval'
console.log(obj);


const dict = {
    "word": "meaning",
    "word1": "meaning1",
    "worgd2": "meaning2",
    "worgdsd2": "meaning2",
    "wordfgd2": "meaning2",
}

console.log(dict);