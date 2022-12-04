---
layout: center
---

## State and events

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Goal

We want our articles to be selectable:

1. Add a `selected` state inside the `JukeBox` component using the `useState` hook.
2. Add a `isSelected` `HTML` class in the rendering of the `JukeBox` component.

---

### Event

Event listener are attached to `JSX` element like for classic `HTML` but attributes are in camelCase format:

* `onClick`
* `onKeyDown`
* `onSubmit`
* ...

Example:
```jsx
function Demo() {
  function handleClick() {
    console.log('Button was clicked !');
  }

  return (
    <button type="button" onClick={handleClick}>
      Click me
    </button>
  );
}
```

---

### `useState`

You can use `useState` to define a new state variable.

`useState` takes one argument:

1. the initial value for the state.

`useState` returns an array containing 2 elements:

1. the state variable
2. a function you can use to update the state

<alert>Calling the update function triggers a new rendering of the component.</alert>

<alert type="error">Updating a state is the only to trigger a render.</alert>

---

### Example

Example:
```jsx
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
    </div>
  );
}
```

---

### `classnames`

To help manage HTML classes you can use the `classnames` library:

1. Installation:

```bash
npm install classnames
```

2. Import:

```jsx
import classnames from 'classnames';
```

3. Usage:

```jsx
<div className={classnames(
  'JukeBox',
  {isSelected: selected}
)}>
```

---

### Exercice

1. Use the hook inside the JukeBox component to manage a selected state for the track.
2. Add some CSS to visualize the change of state.

---

### State update function

The state update function accept two types or parameter:

1. a value that will be used as the new state
2. or a function that returns the new state.

When using a function, you will get the previous state value as parameter.

---

### Warning 1

<alert type="warning">Updating the state is asynchronous so changes do not apply immediately.</alert>

It means this example is wrong: https://codepen.io/tonai/pen/BdLrPm?editors=0010

If you need the previous value to calculate the next value of the state you need to use the alternative syntax of the update function.

This example is now right: https://codepen.io/tonai/pen/RZgpWz?editors=0010

<!--
it is best to use a function for the updater if the calculation of the new value depends on the previous value.
-->

---

### Warning 2

<alert type="warning">The new state given to the update function must be different to the previous state (else no new render is triggered).</alert>

It means this example is wrong: https://codepen.io/tonai/pen/OJNmQeL?editors=0010

<alert>You must avoid mutation when updating the state.</alert>

This example is now right: https://codepen.io/tonai/pen/gOrWebY?editors=0010

<!--
Mutation: The property of the track object is modified but not the track object itself. The track reference is still the same so there is no refresh.
-->
