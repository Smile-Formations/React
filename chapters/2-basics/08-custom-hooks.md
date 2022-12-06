---
layout: center
---

## Custom hooks

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Purpose

You can build your own hooks.

A custom hook is just a function which name starts with `use`.

Inside a hook you cannot render `JSX` but you can call other hooks.

This is a powerful features to externalize and share business logic.

---

### Exercise

1. Inside src create a hooks directory
2. Inside hooks create a useCategories folder and a useCategories.js file
3. Try to extract the categories loading logic from the App component into a custom hook

<!--
You can also do the same for loading and filtering the tracks with a custom `useFilteredTracks`.

All community hooks you can find in third party libraries are all based on React hooks.

You can find a collection of hooks here: https://github.com/streamich/react-use
-->
