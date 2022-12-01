---
layout: center
---

## Code splitting

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Dynamic import

Create React App supports code splitting via dynamic `import()`.

For example:
```jsx
// moduleA.js
export const moduleA = 'Hello';
```

```jsx
// App.js:
export default function App() {
  function handleClick() {
    import('./moduleA').then(({ moduleA }) => /* Use moduleA */ );
  };

  return <button onClick={handleClick}>Load</button>;
}
```

---

### `lazy`

For "components" you can use `lazy`.

Example:
```jsx
import { lazy } from 'react';

const OtherComponent = lazy(() => import('../OtherComponent/OtherComponent'));

function MyComponent() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Load and show component</button>
      {show && <OtherComponent />}
    </div>
);
}
```

The `JS` file containing the code of `OtherComponent` will only be loaded when the component is displayed.

It assumes that the `./OtherComponent` file as a default export exposing a React component.

---

### `Suspense`

Lazy loaded component must be wrapped inside a `Suspense` component:
```jsx
import { lazy } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <OtherComponent />
      </div>
    </Suspense>
  );
}
```

The `Suspense` component will display the `fallback` until the content is loaded.

---

### Routing

Routing is a good place to use lazy-loaded components:
```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}
```

<!--
* Check out how resources are loaded in the current app.
* Implement the code splitting strategy.
* Check out how the resources are loaded now.
-->
