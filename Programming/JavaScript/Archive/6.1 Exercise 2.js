let marks = {
    "Potter": 4,
    "Hermoine": 54,
    "Zachkry": 3,
}

// problem 1 print marks using plain for loop
arr = Object.keys(marks)
for (let i = 0; i < arr.length; i++) {
    const name = arr[i];
    console.log("the marks of " + name + " are " + marks[name]);

}
// problem 2 using for in loop
for (let key in marks) {
    console.log("the marks of " + key + " using forin loop are " + marks[key]);

}

//    let correct=10
//    let num
// while (num!=correct) {
//    num=prompt("Enter number")
//     console.log("Try Again!");
// }
const mean = (a, b, c, d)=> {
    return (a + b + c + d) / 4
}
console.log(mean(1, 2, 3, 4));