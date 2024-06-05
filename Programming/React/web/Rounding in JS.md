---
aliases:
  - rounding numbers to decimal places in js
---
Round a number to 2 decimal places in JavaScript:

```js
// Round num to 2 decimal places
Math.round((num + Number.EPSILON) * 100) / 100
```
