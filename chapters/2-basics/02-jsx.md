---
layout: center
---

## JSX

<Toc maxDepth="2" mode="onlySiblings"/>

---

### `Article` component

We will develop an application that manages articles.

We will begin with an `Article` component:

- Inside `src` create a `components` directory
- Inside `components` create an `JukeBox` directory
- Inside `JukeBox` create an `JukeBox.js` file

---

### Component boilerplate

In that file you need to:

1. Create a function Article that returns HTML:

```jsx
function JukeBox() {
  return (
    <div>SoundTrack Card</div>
  );
}
```

3. Then export that function:

```jsx
export default JukeBox;
```

---

### Use `JukeBox` component

To use this newly created component, update `index.js`:
```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import JukeBox from './components/JukeBox/JukeBox.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JukeBox />
  </React.StrictMode>
);
```

It should detect your modifications, re-build and reload the page.

<alert>`<React.StrictMode>` is a tool for highlighting potential problems in an application, but it will trigger an additionnal render in development mode.</alert>

---

### Interpolation

In `JukeBox.js`, we’ll initialize the component with some article data:
```jsx
const track = {
  "id": 1,
  "title": "My Christmas song",
  "category": "News",
  "published": true,
  "description": "Lorem ipsum dolor sit amet."
};
```

And update the `HTML` the component is returning:
```jsx
<div>
  <div>{track.title}</div>
  <div>{track.category}</div>
  <div>{track.published ? 'Published' : 'Outcome soon'}</div>
</div>
```

---

### `CSS`

Next create some `CSS`:

1. Create a `JukeBox.css` file
2. And import it in the `JukeBox.jsx` file:

```jsx
import './JukeBox.css';
```

3. Add some classes but as the `class` keyword is reserved in JavaScript, you will need to use `className` instead:

```jsx
<div className="JukeBox">
...
</div>
```

4. Then add some styles in the CSS file.
