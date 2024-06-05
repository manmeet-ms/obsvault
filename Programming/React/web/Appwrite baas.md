After creating the react project (`vite`) and `npm i appwrite`; add web platform from the appwrite console and copy the project ID to init the appwrite sdk:
```js
/* src/lib/appwrite.js */
import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("<YOUR_PROJECT_ID>"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
```

### Setting up Authentication

Basic routing to only show the app if the user is logged in:
```jsx
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserProvider } from "./lib/context/user";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>
        <main>{isLoginPage ? <Login /> : <Home />}</main>
      </UserProvider>
    </div>
  );
}

export default App;
```

> [!NOTE] Checking for the login page
> ```js
> window.location.pathname === "/login";
> ```

A navbar that is visible on all pages that shows:
- a logout button if the the user is logged in
- a login button is the user is not

```jsx
function Navbar() {
  const user = useUser();

  return (
    <nav>
      <a href="/">Idea tracker</a>
      <div>
        {user.current ? (
          <>
            <span>{user.current.email}</span>
            <button type="button" onClick={() => user.logout()}>
              Logout
            </button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  );
}
```

### Login Page

```jsx
/* Login Page */
import { useState } from "react";
import { useUser } from "../lib/context/user";

export function Login() {
    const user = useUser();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section>
            <h1>Login or register</h1>
            <form>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={event => {
                        setEmail(event.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={event => {
                        setPassword(event.target.value);
                    }}
                />
                <div>
                    <button
                        className="button"
                        type="button"
                        onClick={() => user.login(email, password)}
                    >
                        Login
                    </button>
                    <button
                        className="button"
                        type="button"
                        onClick={() => user.register(email, password)}
                    >
                        Register
                    </button>
                </div>
            </form>
        </section>
    );
}
```

### Databases

[Permissions - Docs - Appwrite](https://appwrite.io/docs/advanced/platform/permissions)
