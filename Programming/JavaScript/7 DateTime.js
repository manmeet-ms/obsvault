// Temporal API proposal
let newDate = new Date()
console.log(newDate);
console.log(newDate.toISOString());
console.log(newDate.toDateString());
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleDateString('en-IN'));

console.log('json' + newDate.toJSON());
console.log(newDate.toLocaleTimeString());
console.log(newDate.toTimeString());
console.log(newDate.toUTCString());


console.log(newDate.getDate());
console.log(newDate.getHours());

let createdDate = new Date()
