Add `vercel.json` at the root of the project:
```json
{
  "rewrites":  [
    {"source": "/(.*)", "destination": "/"}
  ]
}
```

---
Source: [Why does react-router not works at vercel? - Stack Overflow](https://stackoverflow.com/questions/64815012/why-does-react-router-not-works-at-vercel/65644138#65644138)
Learn More: [Rewrites on Vercel | Vercel Docs](https://vercel.com/docs/concepts/edge-network/rewrites)
