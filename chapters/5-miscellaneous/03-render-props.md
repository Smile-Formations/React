---
layout: center
---

## Render props

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Defining a render props

Render props is a technique increasing the re-usability of a component by using a function as children props.

Example:
```jsx
function MyComponent(props){
  const { children } = props;

  const foobar = getFoobar();

  return (
    <div>
      {children(foobar)}
    </div>
  );
}
```

---

### Using a render props

Usage:
```jsx
<MyComponent>
  {(myData) => (
    <div>
      <span>{myData.foo}</span>
      <span>{myData.bar}</span>
    </div>
  )}
</MyComponent>
```

It is mostly used in third party libraries.

<!--
Libraries using this technique:

* React router
* Downshift
* Formik
* React virtualized
-->
