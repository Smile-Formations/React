---
layout: center
---

## Other hooks

<Toc maxDepth="2" mode="onlySiblings"/>

---

### `useMemo`

You can use `useMemo` to memorize a value (similar to `useCallback` but for values).

`useMemo` takes two arguments:

1. a function that returns the value to be memorized
2. an array of the dependencies

`useMemo` returns the memorized value.

---

### Example

Here we have a problem:
```jsx
import Theme from './theme-context';

function App(props) {
  const { color } = props;
  const theme = { color };

  return (
    <Theme.Provider value={theme}>
      ...
    </Theme.Provider>
  );
}
```

<!--
Each times the `App` component re-renders, a new theme object is created (event if color has not changed), thus all components that use the contexts will re-render even if they are wrapped with memo
-->

---

### Solution

Solved with `useMemo`:
```jsx
import { useMemo } from 'react';
import Theme from './theme-context';

function App(props) {
  const { color } = props;
  const theme = useMemo(() => ({ color }), [color]);

  return (
    <Theme.Provider value={theme}>
      ...
    </Theme.Provider>
  );
}
```

---

### `useCallback` or `useMemo`

Use:

* `useCallback` if you want to memoize a function
* `useMemo` if you want to memoize a value

<v-click>

But in fact `useCallback` is just syntaxic sugar on top of `useMemo`:
```jsx
import { useCallback, useMemo, useState } from 'react';

function Counter(props) {
  const [a, setA] = useState(1);

  // Here both functions are identical
  const memorizedFn1 = useCallback((b) => a + b, [a]);
  const memorizedFn2 = useMemo(() => (b) => a + b, [a]);

  console.log(memorizedFn1(41)); // 42
  console.log(memorizedFn2(41)); // 42

  return (
    <button onClick={() => setA(a + 1)} type="button">{a}</button>
  );
}
```

</v-click>

---

### `useReducer`

Similar to `useState`, `useReducer` is used to create a state.

`useReducer` takes two arguments:
1. a reducer function that calculates the new state based on action.
2. the initial value for the state.

useReducer returns an array containing 2 elements:

1. the state variable
2. a function you can use to dispatch an update action

---

### Example

Example:
```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return {count: state.count + 1};

    case 'dec':
      return {count: state.count - 1};
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <>
      Total: {state.count}
      <button onClick={() => dispatch({type: 'dec'})}>-</button>
      <button onClick={() => dispatch({type: 'inc'})}>+</button>
    </>
  );
}
```

---

### `useId`

`useId` is a hook for generating unique IDs that are stable across the server and client.

`useId` takes no arguments.

`useId` returns the unique value.

---

### Example

Example:
```jsx
import { useId } from 'react';

function TextField(props) {
  const { label } = props;
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id}/>
    </div>
  );
};
```

---

### `useDeferredValue`

Create some kind of debounced value of a given state.

The deferred value will be updated as soon as React as finished the work with urgent renders.

`useDeferredValue` takes one argument:

1. The value to copy

`useDeferredValue` returns the deferred value.

---

### Example

Example:
```jsx
import { useDeferredValue, useEffect, useState } from 'react';

function Counter() {
  const [a, setA] = useState(1);
  const b = useDeferredValue(a);

  useEffect(() => {
    // Simulate long task
    setTimeout(() => {
      let i = 0;
      while(i < 999_999_999) i++;
    }, 0);
  });

  return (
    <button onClick={() => setA(a + 1)} type="button">{a} = {b}</button>
  );
}
```

---

### `useTransition`

Transition are non-urgent actions that can be suspended until urgent work is finished like for deferred value

`useTransition` takes no argument.

`useTransition` returns an array containing 2 elements:

1. the pending state
2. a function to start the transition

---
layout: two-cols-with-title
---

### Example

::left::

```jsx
import { useState, useTransition } from 'react';
import List from '../List/List';

function Counter() {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  
  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
    startTransition(() => {
      setCount(value);
    })
  }

  return (
    <div>
      <input type="range" onChange={handleChange} value={value}/>
      {isPending ? <div>Loading...</div> : <List count={count}/>}
    </div>
  );
}
```

::right::

```jsx
function List(props) {
  const { count } = props;
  return new Array(+count).fill().map((_, i) => (
    <div key={i}>{i}</div>
  ));
}
```

---

### Urgent or not

You have to decide what has to be urgent and what can be delayed.

But in general, to have a user experience that feels responsive, following elements should be managed as urgent renders:

* form elements
* simple buttons
* loaders

Other updates can be postponed if an appropriate indicator (loader) is displayed that hint the user that something is running.
