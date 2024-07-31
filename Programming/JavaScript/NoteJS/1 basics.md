Containers  that store values. Values can be changed during the runtime.

```js
var name = "value"
```
`'var'`, `'let'`, `'const'` are keywords
`'name'` is identifier 
`'='` is assignment operator 
@RHS there are values/literals.


Dynamically changing values at runtime
```js
var box = 84
console.log(box)

// Updating a variable's type right at runtime 
box = "JavaScript"
console.log(box)
```


### Difference between `var` `let` `const`

| Keyword | Scope         | Redeclaration & Reassignment | Hoisting Behavior                                                    |
| ------- | ------------- | ---------------------------- | -------------------------------------------------------------------- |
| `var`   | Global, Local | Yes & Yes                    | Yes, with default value (`undefined`)                                |
| `let`   | Block         | No & Yes                     | Yes, without default value (Temporal Dead Zone)                      |
| `const` | Block         | No & No                      | Yes, without default value (Temporal Dead Zone); must be initialized |

- **`var`:** Function or global scope, allows redeclaration and reassignment, hoisted with a default value of `undefined`.
- **`let`:** Block scope, does not allow redeclaration but allows reassignment, hoisted but not initialized (stays in Temporal Dead Zone until declaration).
- **`const`:** Block scope, neither redeclaration nor reassignment is allowed, must be initialized at declaration, hoisted but not initialized (stays in Temporal Dead Zone until declaration) [1][3].

`var`
- was used before ES6. 
- var is globally scoped
- We should avoid it may introduce bugs. Generally due to its global scoping.
- can be updated and re-declared
- are initialized with 'undefined'

`let`
- is used to declare Block-scoped variables, i.e. in functions control statements, etc. 
- can be updated but not re-declared as it is in memory already., unless it will throw error

```js
let variable = 40
let variable = "Laugh"
```
```
SyntaxError: Identifier 'variable' has already been declared
```

- not initialized 
```js
let
```
```
ReferenceError: let is not defined
```

`const` 
- used to declare constants. 
- Recommended to use it as much as possible.  Do fact check
- neither updated nor re-declared
- must be initialized at the time of declaration 
```js
const asign = 40
asign = "same"
```
```error
TypeError: Assignment to constant variable.
```
**Exception**: 
Alteration in `const` JavaScript Objects.


> [!warning] Error Warning 
> Switching between these three with result in  error 
> 
> ```js
var age = 40
const age = "40"
let age = "40" 
>```



## Rules for variable names
-  Must begin with `'_'` `'$'` or a `letter`
-  Reserved keywords not allowed
- Cannot contain spaces or special characters (except underscore and dollar sign).
- Case-sensitive (e.g., `myVar`, `myvar`, and `MYVAR` are different).
- Including type indications in names can be helpful due to JavaScript's dynamic typing.


---
`consol.log()` alternative for better rep

```js
const accountId = 125678 //intentionally lock value, can't be changed
let accountEmail = "hello@js.com"  
var accountPswd = "klJUdD$8s!W&8JSh)"

console.table([accountId, accountEmail,accountPswd])
```
![[Pasted image 20240615001004.png]]