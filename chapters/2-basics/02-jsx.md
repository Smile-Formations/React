---
layout: center
---

## JSX

<Toc maxDepth="2" mode="onlySiblings"/>

---

### `JukeBox` component

We will develop an application that manages tracks.

We will begin with an `JukeBox` component:

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
import JukeBox from './components/JukeBox/JukeBox';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JukeBox />
  </React.StrictMode>
);
```

It should detect your modifications, re-build and reload the page.

<alert>`<React.StrictMode>` is a tool for highlighting potential problems in an application, but it will trigger an additional render in development mode.</alert>

---

### Interpolation

In `JukeBox.js`, we’ll initialize the component with some track data:
```jsx
const track = {
    "id": 1,
    "title": "Find The Real",
    "album": "One Day Remains",
    "band": "Alter Bridge",
    "year": "2004",
    "poster": "https://i.ebayimg.com/images/g/OqoAAOSwJYVg1y6E/s-l500.jpg",
    "url": "https://www.youtube.com/watch?v=w9LZ0OkdxGg&ab_channel=AlterBridge-Topic",
    "category": 3,
    "description": "One Day Remains is the debut studio album by the American hard rock band Alter Bridge, released on August 10, 2004, on Wind-up Records."
};
```

And update the `HTML` the component is returning:
```jsx
<div>
  <div>{track.title}</div>
  <div>{track.category}</div>
</div>
```

---

### `CSS`

Next create some `CSS`:

1. Create a `JukeBox.css` file
2. And import it in the `JukeBox.js` file:

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
