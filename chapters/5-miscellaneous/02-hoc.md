---
layout: center
---

## HOC

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Definition

Higher-Order Components (`HOC`) is an advanced technique in React for reusing component logic.

A higher-order component is a function that takes a component and returns a new component.

You already used such element: `memo` is a HOC.

---

### Example

Simple example:
```jsx
export default function withHoc(Cmp) {
  return function(props) {
    return (
      <Cmp {...props} />
    );
  }
}
```

Usage:
```jsx
function MyComponent(props) { ... }

export default withHoc(MyComponent);
```

---

### `HOC` name

It is a good practice to wrap the display name of the component:
```jsx
export default function withHoc(Cmp) {
  return function WithHoc(props) {
    return (
      <Cmp {...props} />
    );
  }
  WithHoc.displayName = `WithHoc(${getDisplayName(Cmp)})`;
  return WithHoc;
}

function getDisplayName(Cmp) {
  return Cmp.displayName || Cmp.name || 'Component';
}
```
