---
aliases:
  - GitHub Pages
---
## Deploy using GitHub Action

- [Deploying Vite project to GH Pages](vite-deploy%20on%20gh-pages.md) 

## Deploy from branch 

Using [gh-pages](https://www.npmjs.com/package/gh-pages) or manually pushing to `gh-pages` branch or deploying directly from `main` branch

```bash
npm i -D gh-pages
```

Now add the following `npm` scripts to the `package.json`:

```json
"predeploy": "npm run build",  // Optional
"deploy": "gh-pages -d dist"
```
Additional deploy options:
`-b <branch-name>` - branch name to publish to (default: `gh-pages`)
`-r <repo>` - repo name to publish to (default: current repo)


> [!error] Getting `fatal: Couldn't find remote ref refs/heads/gh-pages`?
> 1. Edit `"deploy"` script from `gh-pages` to `gh-pages-clean`
> 2. Run `npm run deploy`
> 3. Change the `"deploy"` script back to `gh-pages`
