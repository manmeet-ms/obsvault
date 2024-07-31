### Understanding Global and Local Scopes in JavaScript

#### Global Scope

Variables declared outside any function or block have a global scope. They can be accessed from anywhere within the program, including inside functions. Global variables are useful for storing values that need to be accessed across different parts of your application. However, overuse of global variables can lead to naming conflicts and make the code harder to maintain.

```javascript
var globalVar = "I'm accessible everywhere";

function showGlobal() {
  console.log(globalVar); // Accessible here
}

showGlobal(); // Outputs: I'm accessible everywhere
console.log(globalVar); // Also accessible outside the function
```

#### Local Scope

Local scope refers to variables defined within a function or a block. These variables are only accessible within the function or block where they are declared. Local scoping helps encapsulate functionality and prevents naming conflicts with global variables.

```javascript
function showLocal() {
  var localVar = "I'm only accessible inside this function";
  console.log(localVar);
}

showLocal(); // Outputs: I'm only accessible inside this function
// console.log(localVar); // Would throw an error, localVar is not defined in this scope
```

### Lexical Scoping

Lexical scoping, also known as static scoping, determines the accessibility of variables based on their location within the source code during development time. Essentially, a variable's scope is determined by where it is defined in the code structure, not where it is called during execution.

#### Example Demonstrating Lexical Scoping

```javascript
var globalVar = "I'm global";

function outerFunction() {
  var outerVar = "I'm in outerFunction";

  function innerFunction() {
    console.log(globalVar); // Accesses global variable
    console.log(outerVar); // Accesses outerFunction's variable
    console.log(innerVar); // Accesses its own variable
    var innerVar = "I'm in innerFunction";
  }

  innerFunction();
}

outerFunction();
```

In this example:
- `globalVar` is accessible everywhere due to its global scope.
- `outerVar` is only accessible within `outerFunction` and any functions defined inside it, like `innerFunction`.
- `innerVar` is local to `innerFunction`.

#### Key Points

- **Global Scope**: Variables accessible throughout the program.
- **Local Scope**: Variables confined to the function or block they're declared in.
- **Lexical Scoping**: Scope determined by the physical structure of the code during development time.

Understanding these concepts is crucial for managing variable accessibility and maintaining clean, organized code in JavaScript projects.

Citations:
[1] https://www.geeksforgeeks.org/lexical-scope-in-javascript/#:~:text=The%20scope%20is%20determined%20by,in%20which%20they%20are%20defined.
[2] https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/
[3] https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/
[4] https://web.dev/articles/global-and-local-scope
[5] https://stackoverflow.com/questions/1047454/what-is-lexical-scope
[6] https://medium.com/@abbas.ashraf19/javascript-scope-and-closures-understanding-lexical-scoping-16cd884244e0
[7] https://dev.to/antonzo/lexical-scope-lexical-environment-execution-context-closure-in-javascript-5bn6
[8] https://www.w3schools.com/js/js_scope.asp
[9] https://www.bomberbot.com/javascript/scope-in-javascript-global-vs-local-vs-block-scope-explained/
[10] https://medium.com/altcampus/scope-local-global-and-lexical-e164f53450b3