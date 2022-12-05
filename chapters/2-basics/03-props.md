---
layout: center
---

## Props

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Setting props

Create a new `App` component and:

1. import the previously created component:

```jsx
import Article from '../JukeBox/JukeBox';
```

2. Move the `track` variable from `JukeBox` inside this component (inside the component function).
3. Then render the `JukeBox` component and pass it the `track` variable by using `HTML` attributes:

```jsx
function App() {
  return (
    <JukeBox track={track} />
  );
}
```

4. Update `index.js` to use the `App` component instead of the `JukeBox` component.

---

### Getting props

HTML attributes set on a component are called props. You can retrieve them inside the component as the first function parameter:
```jsx
function JukeBox(props) {
  // Destructing.
  const { track } = props;
  // Equivalent without destructuring:
  // const track = props.track;
}
```

Example with multiples attributes:
```jsx
<Example foo="foo" bar={42} baz={someVar} />
```

```jsx
// Example.js
function Example(props) {
  const { foo, bar, baz } = props;
  console.log(foo); // 'bar' (string)
  console.log(bar); // 42 (number)
  console.log(baz); // content of sthe omeVar variable
  return null;
}
export default Example;
```

<alert type="warning">props are read only !</alert>

---

### Default props

You can define default values for props:
```jsx
function Example({ count }) {
  return (
    <p>You clicked {count} times</p>
  );
}

Example.defaultProps = {
  count: 0
};
```