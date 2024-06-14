
console.log("This is user msg");
console.error("To print a specific custom error");
console.warn("To print a specific custom warning");

let obj={
    "Name":"Bombastic!",
    "Groups":45,
    "People":"8554582120",
    99:"Code",
}
console.table(obj)
console.table(console)

console.info("To give a informstion about something specific")
console.assert("Returns undefined if the defined condition holds truth. Otherwise it will throw Assertion failed error. ")

console.time("time");
// for (let index = 0; index < 1001; index++) {
//     console.log(index);
    
// }
// console.timeEnd("time");

console.time("process_LabelMustBeSame"); // starting time for the label
// process going on
for (let index = 0; index < 1001; index++) {
    console.log(index);
}
console.timeEnd("process_LabelMustBeSame"); // ending time for the label
