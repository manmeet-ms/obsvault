When creating objects in JavaScript, you have several options:

- **Object Literals**: Directly define an object within curly braces `{}`. Changes to the object affect all references to it since it's a singleton.

```javascript
const userDetails = {name: "Aman", age: "22", Company: "tutorialspoint"};
```

- **Constructor Function**: Use a function to create objects. Allows for multiple instances, meaning changes to one instance don't affect others.

```javascript
function User(name, age, company) {
  this.name = name;
  this.age = age;
  this.company = company;
}

const userDetails = new User("Aman", 22, "tutorialspoint");
```

- **Singleton Pattern**: Ensure a class has only one instance and provide a global point of access to it. Useful for things like logging, driver objects, caching, thread pools, and database connections.

```javascript
var mySingleton = (function () {
  var instance;

  function init() {
    var privateMethod = function () {
      console.log("Private method called");
    };

    var privateVariable = "Also private";

    return {
      publicMethod: function () {
        console.log("Public method called");
      },
      publicProperty: "Public property"
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

console.log(singleA === singleB); // true
```


---

# Concise Markdown Notes on JavaScript Objects

## Creating Objects

### Object Literals
Objects can be created using object literals, which allow direct definition of properties and methods within curly braces `{}`.

```javascript
const user = {
    name: 'Shin',
    "full name": 'Shin Tenese',
    age: Infinity,
    lastLogin: ['Monday', 'Saturday']
};
console.log(user);
```

### Accessing Properties
Properties can be accessed using dot notation or bracket notation, which is useful for accessing properties with spaces or special characters.

```javascript
console.log(`Typical method: ${user.name}`);
console.log(`"Right" method: ${user["name"]}`);
console.log(`Accessing "full name": ${user["full name"]}`);
console.log(`${user.lastLogin}`);
console.log(`${user['lastLogin']}`);
```

### Symbols
Symbols are unique identifiers that can be used as property keys, preventing accidental overwriting of properties.

```javascript
let frstSym = Symbol('SSNkey325486');
console.log(typeof frstSym);

const defineSymbol = {
    [frstSym]: 'SSNkey325486',
};
console.log(defineSymbol[frstSym]);
console.log(typeof defineSymbol[frstSym]);
```

## Updating Values
Values of properties can be updated directly unless the object is frozen.

```javascript
console.log(user.age);
user.age = 99;
console.log(user.age);
```

## Freezing Objects
`Object.freeze()` prevents modification of the object, including addition, deletion, or change of properties.

```javascript
console.log(user["full name"]);
user["full name"] = 'Name changed';
console.log(user["full name"]);
Object.freeze(user);
user["full name"] = 'XYZ again'; // No effect, but no error
console.log(user["full name"]);
```

## Functions in Objects
Functions can be defined within objects as methods or added later as properties.

```javascript
const funcObj = {
    name: 'Kofu',
    age: 2,
    greet: function() {
        console.log('Defined inside, this will result anonymous because no funcName is def');
    }
};

funcObj.greetOut = function() {
    console.log('This will append in object as it\'s not freezed, function by defining outside, same case of anonymity');
};

funcObj.greet(); // Execute the function
funcObj.greetOut(); // Append function as a property
```

This overview covers the basics of creating, modifying, and interacting with objects in JavaScript, highlighting the flexibility and power of the language's object model.

## Nested objects 

accessing can be done depth acheived with `var.and.and.and`

const obj1 = {a: ['A', 'B']};
const obj2 = {a: ['C'], b: ['D']};
const mergedObj = {...obj1,...obj2}; // Shallow merge
console.log(mergedObj); // {a: ['C'], b: ['D']}
