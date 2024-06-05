Source: [Abortable fetch - Chrome for Developers](https://developer.chrome.com/blog/abortable-fetch/)

## The controller + signal manoeuvre

Meet the `AbortController` and `AbortSignal`:

```js
const controller = new AbortController();
const signal = controller.signal;
```

The controller only has one method:

```js
controller.abort();
```

When you do this, it notifies the signal:

```js
signal.addEventListener('abort', () => {
    // Logs true:
    console.log(signal.aborted);
});
```

## Abort signals and fetch

Fetch can take an `AbortSignal`. 

For instance, here's how you'd make a fetch timeout after 5 seconds:

```js
const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 5000);

fetch(url, { signal }).then(response => {
    return response.text();
}).then(text => {
    console.log(text);
});
```

When you abort a fetch, it aborts both the request and response.

*Note*: ok to call `.abort()` after the fetch has already completed, fetch simply ignores it.

Alt: the signal can be given to a request object and later passed to fetch:

```js
const controller = new AbortController();
const signal = controller.signal;
const request = new Request(url, { signal });

fetch(request);
```

This works because `request.signal` is an `AbortSignal`.

*Note*: Technically, `request.signal` isn't the same signal you pass to the constructor. It's a new `AbortSignal` that mimics the signal passed to the constructor. This means every `Request` has a signal, whether one is given to its constructor or not.

## Reacting to an aborted fetch

When you abort an async operation, the promise rejects with a `DOMException` named `AbortError`:

```js
fetch(url, { signal }).then(response => {
    return response.text();
}).then(text => {
    console.log(text);
}).catch(err => {
    if (err.name === 'AbortError') {
    console.log('Fetch aborted');
    } else {
    console.error('Uh oh, an error!', err);
    }
});
```

Here's an example that gives the user a button to load content, and a button to abort. If the fetch errors, an error is shown, _unless_ it's an abort error:

```js
// This will allow us to abort the fetch.
let controller;

// Abort if the user clicks:
abortBtn.addEventListener('click', () => {
    if (controller) controller.abort();
});

// Load the content:
loadBtn.addEventListener('click', async () => {
    controller = new AbortController();
    const signal = controller.signal;

    // Prevent another click until this fetch is done
    loadBtn.disabled = true;
    abortBtn.disabled = false;

    try {
    // Fetch the content & use the signal for aborting
    const response = await fetch(contentUrl, { signal });
    // Add the content to the page
    output.innerHTML = await response.text();
    }
    catch (err) {
    // Avoid showing an error message if the fetch was aborted
    if (err.name !== 'AbortError') {
        output.textContent = "Oh no! Fetching failed.";
    }
    }

    // These actions happen no matter how the fetch ends
    loadBtn.disabled = false;
    abortBtn.disabled = true;
});
```

## One signal, many fetches

A single signal can be used to abort many fetches at once:

```js
async function fetchStory({ signal } = {}) {
    const storyResponse = await fetch('/story.json', { signal });
    const data = await storyResponse.json();

    const chapterFetches = data.chapterUrls.map(async url => {
    const response = await fetch(url, { signal });
    return response.text();
    });

    return Promise.all(chapterFetches);
}
```

In the above example, the same signal is used for the initial fetch, and for the parallel chapter fetches. Here's how you'd use `fetchStory`:

```js
const controller = new AbortController();
const signal = controller.signal;

fetchStory({ signal }).then(chapters => {
    console.log(chapters);
});
```

In this case, calling `controller.abort()` will abort whichever fetches are in-progress.