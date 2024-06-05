React Context API helps pass data without using props. Saves from prop-drilling. 

1. Call [createContext](https://react.dev/reference/react/createContext) outside of any component to create a context 
```tsx
import { createContext } from 'react';  

const SomeContext = createContext(defaultValue);
```

2. Wrap your components into a [context provider](https://react.dev/reference/react/createContext#provider) to specify the value of this context for all components inside. E.g.
```tsx
function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
```

3. Call [`useContext`](https://react.dev/reference/react/useContext) at the top level of your component to read and subscribe to [context](https://react.dev/learn/passing-data-deeply-with-context)
```tsx
import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...
```
