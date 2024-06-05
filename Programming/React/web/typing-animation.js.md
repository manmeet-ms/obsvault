How to create a typing effect using JavaScript?

1. Define a variable that contains the text to be displayed: `const text = 'Hello, World!'`
2. Define a variable that keeps track of the current character: `const i = 0`
```js
const typingEffect = (text, i = 0) => {
    if (i < text.length) {
        if (i === 0) domElement.textContent = '';
        domElement.textContent = text.charAt(i);
        setTimeout(50, typingEffect(text, i + 1));
    }
};
```
