---
layout: center
---

## Contexts

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Purpose

Context is designed to share data that can be considered "global" for a subtree of React components.

By using context, we can avoid passing props through intermediate elements (AKA props drilling).

You can create a context with createContext that will return an object you can use to write and read the context.

Example of context creation in `./contexts/theme-context.js`:
```jsx
import { createContext } from 'react';
export default createContext(lightTheme);
```

---

### Setting the value

The property `Provider` of the context object renders a component that take a `value` props that you can use to set the value of the context.

Example:
```jsx
import Theme from '../../contexts/theme-context';

function App() {
  return (
    <Theme.Provider value={darkTheme}>
      All components here can access the theme object.
      Even nested components !
    </Theme.Provider>
  );
}
```

---

### `useContext`

You can use `useContext` to get a context value.

`useContext` takes one argument:

1. the object context.

`useContext` returns the context value.

---

### Getting the value

Example:
```jsx
import { useContext } from 'react';
import Theme from '../../contexts/theme-context';

function ThemedButton() {
  const theme = useContext(Theme);
  return (
    <button style={{backgroundColor: theme.bg}}/>
  );
}
```

---

### Exercise

Use a context to provide the categories to your components without having to pass them through intermediate components.
