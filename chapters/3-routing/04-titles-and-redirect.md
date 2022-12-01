---
layout: center
---

## Titles and redirect

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Exercise

1. Create a `Title` component accepting a `title` props.
2. Displays the title inside a `h1` tag, and update the page title using an effect.
3. Use that component in `TrackPage` and `TracksPage`.

To update the page title you can use:
```jsx
document.title = 'Title of the page displayed in the browser tab';
```

---

### Redirect

For redirecting you can use the `Navigate` component with a `to` attribute indicating the destination `URL`.

Example:
```jsx
import { Navigate } from 'react-router-dom';

function Example() {
  return (<Navigate to="/">);
}
```

---

### redirect 404

you can use the `Navigate` component to redirect 404 pages:
```jsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TracksPage/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
}
```

---

### `useNavigate`

You can also import the `useNavigate` hook to redirect in callbacks.

Example:
```jsx
import { useNavigate } from 'react-router-dom';

function Example() {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate("/");
  }

  return (<a href="" onClick={handleClick}>Redirect</a>);
}
```

---

## Exercise

Redirect the user to the edit page after a track creation.
