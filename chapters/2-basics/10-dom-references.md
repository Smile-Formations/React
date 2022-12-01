---
layout: center
---

## DOM references

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Goal

The next step is to set automatically the focus on the first input when the app loads.

But for that we need to access the DOM and use the imperative api.

---

### `useRef`

You can use `useRef` to define a reference.

`useRef` takes one argument:

1. the initial value.

`useRef` returns an object with a mutable current property.

---

### Example

Example:
```jsx
function Example() {
  const refContainer = useRef(null);

  const onButtonClick = () => {
    console.log(refContainer.current); // DOM element
  };

  return (
  <div>
    <input ref={refContainer} type="text" />
    <button onClick={onButtonClick}>
      Focus the input
    </button>
  </div>
  );
}
```

---

### A mutable variable

You can also use `useRef` without using the ref attribute inside `JSX`, but only for its mutable property.

Example:
```jsx
function Example(props) {
  const ref = useRef({});

  console.log(ref.current); // contains prev props
  ref.current = props;

  return (<div>...</div>);
}
```
