```js
const delay = ms => new Promise(res => setTimeout(res, ms));

async function myAsyncFunction() {
  console.log('start');
  await delay(2000);
  console.log('end');
}

myAsyncFunction(); // logs 'start', waits for 2 seconds, then logs 'end'

```
