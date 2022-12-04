---
layout: center
---

## Performances

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Scenario

Try the following scenario:

1. Install React Developer Tools
2. Go to Profiler tab
3. Start the record
4. Change filters
5. End the record
6. Check the result

<img alt="Performance record" src="/react-perf-1.png" class="h-90" />

<!--
More informations: https://marmelab.com/blog/2017/02/06/react-is-slow-react-is-fast.html
-->

---

### `memo`

Notice that the `Title` component has been re-rendered, but anything has changed in that component.

To optimize this, you can wrap your components with the `memo` function before exporting it:
```jsx
import { memo } from 'React';

function Example() {
  return (<div>Hell Yeah !</div>);
}

export default memo(Example);
```

With `memo` the component will only be re-rendered if:

* Some props changed
* Some state declared inside the component changed
* Some contexts used in the component changed

---

### Exercise

Try to optimize the app by wrapping presentational components inside `memo`.

You can check with a simple `console.log` if components are re-rendered.

You might have issued with some components that still re-render even with `memo`.

You can create a custom hooks `useDebug` to check what props are changing (by using `useRef`).

The problem is that some functions are passed as props to the memorized component, but those functions are re-created each times the parent component re-renders, so the functions received before and after the rendering are not the same (not the same reference).

---

### `useCallback`

You can use `useCallback` to create a memorized callback.

`useCallback` takes two arguments:

1. the function to be memorized
2. an array of the dependencies of the callback (variables that are declared outside the scope of the function)

`useContext` returns the memorized callback.

---

### Example

Example:
```jsx
import { useCallback } from 'react';

function Example(props) {
  const { a } = props;

  const add = useCallback((b) => a + b, [a]);

  console.log(add(3));

  return (<div>...</div>);
}
```

---

### Results

After doing all optimization you should have something like this:

<img alt="Performance record" src="/react-perf-2.png" class="h-90" />

<!--
  Note the greyed `Title` and `JukeBox` components
-->

---

### Conclusion

When using `memo`, it will only perform a shallow comparison of the props, contexts and state.

It means you really have to be careful about mutation and avoid them (mostly in deep structures).

<alert type="error">Also using `memo` and other optimization technique should not be automatic!</alert>

Using `memo` should be a consequence of a performance issue. You can use React Developer Tools and Chrome Development Toolbar to find bottlenecks.
