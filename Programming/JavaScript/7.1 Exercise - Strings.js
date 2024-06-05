let str ="trying..."
console.log(str);
console.log(str.includes("..."));
console.log(str.startsWith("tr"));
console.log(str.startsWith("Tr"));
console.log(str.endsWith("d"));
console.log(str.endsWith("g..."));

money = "Please give Rs 1000"
console.log(Number.parseInt(money.slice((money.length)-4 )));

money[4] = 's'
console.log(money);

