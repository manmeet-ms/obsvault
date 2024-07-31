function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000, 120))

// # arrow functions and `this` keywords

const arrowFunction = () => {
    console.log('I am a Arrow function');
}
arrowFunction() // called

// this Keyword, taalkabout current context
const account = {
    name: 'Ripple',
    welcomeMessage: function callWithName() {
        console.log(`hello inside welcomeMessage ${this.name} `); // `this` accesses the current context
    },
    welcomeMessageArrow: () => {
        console.log(`hello ${account.name} `);
        console.log(`hello ${this.name} `);
    }
}
// console.log(account);
account.welcomeMessage()

account.name = 'Bradley'
// console.log(account);

account.welcomeMessageArrow()
