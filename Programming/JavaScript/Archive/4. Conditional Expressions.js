let a
for (let i = 0; i <= 4; i++) {
    a = prompt("Enter a number: ")
    a = Number.parseInt(a)
    // if (a>7){
    //     console.log("is greater");
    // }

    // else if(a==4){
    //     console.log("no");
    // }

    // else{
    //     console.log("Nice");
    // }

    condition = a > 7
    let output = condition ? "Statement of true" : "else statement of False"
    console.log(output);
}


// swich case

// let a = 5
let s = 10
// let a = prompt("Enter num")
s = Number.parseInt(s)
switch (s + 5) {
    case 10:
        console.log("is 10 case match 1");
        break;
    case 6:
        console.log("is 6 case match 2");
        break;
    case 0:
        console.log("is 0 case match 3");
        break;
    default:
        console.log("ENter something else");
}

// XERCISE 2 Practice set

let age = 15
age = Number.parseInt(age)
if (age >= 10 && age <= 20) {
    console.log("age is between 15-20");
}

if ((age % 2==0) && (age % 3==0)) {
    console.log("the numer is divisinle by a and 3 ");
}

// for (let i = 0; i < 10; i++) {

//     let age = prompt("sd")
//     age = Number.parseInt(age)
//     if (age >= 10 && age <= 20) {
//         console.log("age is between 15-20");
//     }
// }

