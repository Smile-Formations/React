---
layout: center
---

## `JSX`

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Compilation

Fundamentally, `JSX` just provides syntactic sugar for the `React.createElement(component, props, ...children)` function.

Example:
```jsx
<div id="hw">Hell Yeah!</div>;
```

Compiles to:
```jsx
React.createElement(
  "div", // Tag name or component (capitalized)
  { id: "hw" }, // Props and attributes
  "Hell Yeah!" // Child or children
);
```

<!--
You can try it at https://babeljs.io/repl/#?presets= es2015%2Creact%2Cstage-0

JSX is not mandatory for creating React App, but it makes development quick and clear.
-->
