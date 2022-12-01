---
layout: intro
---

# Advanced

<Toc maxDepth="1"/>

---
layout: center
---

## Fragments

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Single root element

If you want to render multiples children from a components but, don’t want to wrap them inside a `<div>` or similar you can wrap them inside the `<Fragment>` component.

Example:
```jsx
import { Fragment } from 'react';

function MyComponent() {
  return (
    <Fragment>
      <div>child 1</div>
      <div>child 2</div>
    </Fragment>
  );
}
```

The `Fragment` component will not render anything in the DOM but its children, while respecting the single root element in `JSX` expression.

---

### Shortcut

You can also use the shortcut.

Example:
```jsx
function MyComponent() {
  return (
    <>
      <div>child 1</div>
      <div>child 2</div>
    </>
  );
}
```
