function getage() {
    let age = Number.parseInt(prompt("Enter your age"));
    if (age > 0) {
        if (age >= 18) {
            alert("Vroom, you can drive!");
            a = confirm("Wanna see that again?")
        }
        else {
            alert("Go back kid, you can't drive!");
            a = confirm("Wanna see that again?")
        }
    }
    else {
        console.error("Atleast enter a positive age")
    }
    if (a) {
        getage()
    }
}

getage()


let num = Number.parseInt(prompt("Enter your age"));
if (num>4){
    location.href = "https://www.google.com"
}