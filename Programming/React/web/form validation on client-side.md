1. Using [Built-In](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation) Form Validation that use the modern form controls such as `required`, `minlength`, `pattern` etc.
2. Using [The Constraint Validation API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api) in JavaScript to validate on the Front-end.
3. [Validating forms w/o a built-in API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_without_a_built-in_api), that is doing it yourself.

---

Parsing form data (client side) and extracting the data, using `FormData` API:

```js
const form = document.querySelector('form');
const output = document.querySelector('output');
form.addEventListener('submit', function(e) {
    e.preventDefault();    // Prevent default form submit event
    const formData = new FormData(form);
    const data = {};
    formData.forEach(function(value,key) {
        data[key] = value;
    });
    output.innerHTML = JSON.stringify(data);
});
```

-----------
**Documentation**:
- [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [Event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)