---
layout: intro
---

# Routing

<Toc maxDepth="1"/>

---
layout: center
---

## React router

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Installation

Install `react-router-dom`:
```bash
npm i react-router-dom
```

To defines routes you need to use following components (import them from `react-router-dom`):

* `BrowserRouter`: High level component that should wrap your entire app.
* `Routes`: Component used to define the routes. It only accepts `Route` component as children.
* `Route`: Define a route with a component to display when the URL match the path

---

### Routing

1. Rename the `App` component to `TracksPage`
2. Create a new `App` component with:

```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TracksPage from '../TracksPage/TracksPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TracksPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

<!--
* `<BrowserRouter>`: a router that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
* `<HashRouter>`: a router that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.
* `<MemoryRouter>`: a router that keeps the history of your "URL" in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native.
-->
