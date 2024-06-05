1. Create a `.env` file, and prefix the variable with `VITE_`
```.env
VITE_API=123435
```
2. The variables are loaded from `.env` and are accessible to the client-side code via `import.meta.env.<VARIABLE_NAME>`

See the full documentation [Env Variables and Modes | Vite (vitejs.dev)](https://vitejs.dev/guide/env-and-mode.html).
