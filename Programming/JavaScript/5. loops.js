num = 10
sum = 0
for (let num = 0; num <= 10; num++) {
    sum += num
}
console.log("Sum of " + num + " natural numbers is " + sum);

let rates = {
    "Orange": 54,
    "Apple": 65,
    "Carrot": 27,
    "Litchi": 90
}

for (let key in rates) {
    console.log(rates[key]);

}
console.log();

for (let i of "Iterable") {
    console.log(i);
}
console.log();
let arr = [1, 3, 4, 5]
for (let i of arr) {
    console.log(i);
}
let i= 0
do{
	console.log(i);
    i++
}while (i<1);