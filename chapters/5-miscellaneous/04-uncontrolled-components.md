---
layout: center
---

## Uncontroled components

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Use case

Sometimes you will need to use uncontrolled components.

For example if you want to integrate an external plugin that customize the inputs.

In that case the data is handled by the `DOM` itself.

So you won’t use `value`, `checked` nor `onChange`.

But instead you will use a `ref` to the input.

---

### Example

Example:
```jsx
function MyForm() {
  const input = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted value: ' + input.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={input} />
      <input type="submit" value="Submit" />
    </form>
  );
}
```

<!--
Example of integration with the Chosen library: https://codepen.io/tonai/pen/oezQjr
-->
