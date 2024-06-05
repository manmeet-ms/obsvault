---
aliases:
  - Progressive Web App
---

- Has strict requirements: fast & accessible, must work offline - service workers, `manifest.json` that has all of the apps metadata - check the Application tab in the debug tools
- Checkout `Workbox` for PWA

```html
<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/<file>.js');
    }
</script>
```

- Chrome Lighthouse
- checkout PWA asset generator
- [fireship pwa lesson](https://youtu.be/sFsRylCQblw)
- 