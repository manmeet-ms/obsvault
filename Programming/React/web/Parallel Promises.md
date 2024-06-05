Resolve promises in parallel:

```ts
const badSmoothie = async() => {
	try {
		const a = getFruit('pineapple');
		const b = getFruit('strawberry');
		const smoothie = await Promise.all([a, b]);
		
		return smoothie;
	} catch(err) {
		
	}
}
```

See [Promise.all() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
