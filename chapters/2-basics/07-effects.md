---
layout: center
---

## Effects

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Goal

We want our tracks to be loaded from an API.

1. Install an API server.
2. Add a state that will hold the loaded articles (what will trigger a new render).
3. Add an effect to load the articles.

---

### `API` server

Install the `API`:

1. Get the API server in `addon/api`.
2. Install:

```bash
npm install
```

3. Start:

```bash
npm run start
```

The server should start and is listening on the 3001 port: http://localhost:3001

<alert>Do not install the `API` inside the React app.</alert>

<alert>Do not forget to start the `API` server the next days.</alert>

---

### proxy

This is not necessary with the `API` we use here in the training.

But sometimes you can encounter cross-origin issues.

To avoid those issues you can add a proxy in `package.json`.

Example:
```json
{
  "proxy": "http://localhost:3001"
}
```

Then you can access the `API`, in dev mode, directly with the `/articles`.

---

### `useEffect`

You can use `useEffect` to create an effect.

`useEffect` takes two arguments:

1. the function to be used as an effect
2. an array of the effect’s dependencies (optionnal but highly recommended)

`useEffect` returns anything

---

### Example

Example (no dependencies):
```jsx
import { useEffect } from 'react';

function Example({ count, onClick }) {
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onClick}>
        Click me
      </button>
    </div>
  );
}
```

<!--
Example at https://codesandbox.io/s/wq7myw6o8k

This example demonstrates the fact that useEffect is asynchronous (executed after the render).
-->

---

### Dependencies

In the previous example, the effect is called each time the component renders.

How can you control when the effect is triggered ?

You can add dependencies when declaring your effect (the second argument).

And the effect will run each time one of the value in the dependency array changed.

---

### Example with dependencies

Example (with dependencies):
```jsx
import { useEffect } from 'react';

function Example({ count, onClick }) {
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onClick}>
        Click me
      </button>
    </div>
  );
}
```

<!--
Example at https://codesandbox.io/s/184jv8nmpq.

This exemple demonstrates that the effect is only executed when the dependencies changed.
-->

---

### Omiting dependencies

For logical and performance reasons, it is always better to specify the dependencies.

You may omit a dependency if it does not references props, state, or values derived from them. (Example: if you use a constant or a function that is declared outside the component)

For a function used as dependency, you can omit it, if it is stable and does not references props, state, or values derived from them.

`eslint` will warn you in the terminal if you missed some dependencies.

<alert>
Omitting dependency is strictly optionnal.  
It will cause no harm to add a dependency that never changes in the array of dependencies
</alert>

---

### Clean up

Sometimes you might want to clean up the effect. (Example: if you need to add en event to the window object you might want to remove it when the component is removed)

To do so, you can return a cleanup function from the effect function.

The cleanup function will be called by React when the component is removed.

But also on the next render that triggers the effect.

---

### Example with cleanup

Example (with cleanup):
```jsx
  import { useEffect } from 'react';

  function Example({ count, onClick }) {
  useEffect(() => {
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [onClick]);

  return (
    <div>
      <p>You clicked {count} times</p>
    </div>
  );
}
```

<!--
Example at https://codesandbox.io/s/0xqwn2zqxv.

This exemple demonstrates that the cleanup function is executed just before the next effect.

It also demonstrates that the cleanup function is executed when the component is removed from the DOM.
-->

---

### Exercice

Now in the `App` component, add a state for the articles and an effect in which you will fetch the articles at http://localhost:3001/articles:
```jsx
useEffect(() => {
  fetch('/articles')
    .then(data => data.json())
    .then(articles => setArticles(articles));
}, [setArticles]);
```

<alert>Don’t forget the dependencies !</alert>

<!--
Infinite loop will occur if the dependency array is omitted.
-->
