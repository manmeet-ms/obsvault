🔗 [React Router](https://reactrouter.com)
See Also: [react-router not working on vercel](react-router%20not%20working%20on%20vercel.md).

```sh
npm install react-router-dom
```

1. Choose a router and create routes in the entry point (`main.ts`).  Here using [Create Browser Router](https://reactrouter.com/en/main/routers/create-browser-router)

```tsx
// ...rest of imports
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // jsx or component to be rendered on this path
    errorPage: // component  to render when error (see below)
    children: [/* nested routes */], // to render use <Outlet /> in <App />
  },
  {
    path: "/contact/:id",  // dynacmic url
    // ....
  },
  // ... rest of the routes
  ],
  basename: "/<REPO>" // if not being deployed to root of the website
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Replaces <App /> */}
  </React.StrictMode>
);
```

2. Create and put all routes in `src/routes`
3. Handling Route errors: See [`useRouteError`](https://reactrouter.com/en/main/hooks/use-route-error)
4. Nested Routes: To render a route/component inside another route, or something. See [`<Outlet>`](https://reactrouter.com/en/main/components/outlet)
5. Use  [`<Link>`](https://reactrouter.com/en/main/components/link) instead of `anchor <a />` tags to allows our app to update the URL without requesting another document from the server. See also:  [`NavLink`](https://reactrouter.com/en/main/components/nav-link)
6. **Loaders**: are (async) functions that are defined on each route and get executed when the route is visited. Useful for: fetching data, etc. See  [`loader`](https://reactrouter.com/en/main/route/loader) and [`useLoaderData`](https://reactrouter.com/en/main/hooks/use-loader-data)
7. **[`action`](https://reactrouter.com/en/main/route/action)**: [`<Form>`](https://reactrouter.com/en/main/components/form) sends the the form data to the client-side and corresponding action function is executed. Useful to add new data, update previous data (overriding)
8. [URL Params in Loaders](https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders): The colon (:) is "dynamic segment" that match and refer to to URL params. 
9. [Mutation Discussion](https://reactrouter.com/en/main/start/tutorial#mutation-discussion) - reading bookmark
10. [`useNavigation`](https://reactrouter.com/en/main/hooks/use-navigation) To get build pending navigation indicators and optimistic UI on data mutations
11.  [`useNavigate`](https://reactrouter.com/en/main/hooks/use-navigate) to create programmatic redirection
12. [Deleting Records](https://reactrouter.com/en/main/start/tutorial#deleting-records): a new route, an action at that route - this function will be executed when this relative path is visited. Read the article before writing your own.
13. [Index Route](https://reactrouter.com/en/main/start/tutorial#index-routes)
14. [URL Search Params and GET Submissions](https://reactrouter.com/en/main/start/tutorial#url-search-params-and-get-submissions): Make a post request, and update the loader on the same route to reflect the changes such as filtering or searching.

---
### Troubleshooting out-of-sync Form, URL and UI

1. If you click back after a search, the form field still has the value you entered even though the list is no longer filtered.
2. If you refresh the page after searching, the form field no longer has the value in it, even though the list is filtered
👉 [FIX](https://reactrouter.com/en/main/start/tutorial#synchronizing-urls-to-form-state)

---
15. [Managing the History Stack](https://reactrouter.com/en/main/start/tutorial#managing-the-history-stack): avoid adding unnecessary history stack by replacing the current entry in the history stack with the next page, instead of pushing into it.
16. [Mutations Without Navigation](https://reactrouter.com/en/main/start/tutorial#mutations-without-navigation):  [`useFetcher`](https://reactrouter.com/en/main/hooks/use-fetcher) hook to do mutations *without* causing navigation and creating new entries in the history stack.

---
## Some Useful Misc Notes

[`useOutletContext`]([useOutletContext v6.13.0 | React Router](https://reactrouter.com/en/main/hooks/use-outlet-context))
Often parent routes manage state that need to be shared with child routes. Using react context route is possible, but since it's very common, it's built-into `<Outlet />`:
```jsx
function Parent() {
    const [count, setCount] = React.useState(0);
    return <Outlet context={[count, setCount ]} />;
}
```

```jsx
import { useOutletContext } from "react-router-dom";

function Child() {
    const [count, setCount] = useOutletContext();
    const increment = _ => setCount((c) => c + 1);
    return <button onClick={increment}>{count}</button>;
}
```
