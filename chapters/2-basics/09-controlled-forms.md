---
layout: center
---

## Controlled form

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Goal

Let’s add some filters:

* A text input to filter on the title
* A select to filter on the category

---

### Two-way data binding

You can listen to input changes with the attribute `onChange`.

You can set the value of an input by using:

* The `value` attribute (text, textarea, select. . .)
* The `checked` attribute (checkbox, radio)

<alert>An input should almost always be synchronized with some state</alert>

<alert>To fully synchronize an input with the state you should use both `onChange` + `value` attributes (or `checked` depending on the type of input).</alert>

---

### `Filters` component

Let’s create a `Filters` component that you will insert inside the `App` component.

1. Synchronise the input with a state declared in the `Filters` component. (for now do not try to filter the list of tracks).
2. Move the state declaration inside the `App` component (lift the state up).
3. Pass the state as a prop to the `Filters` component.
4. Pass a function as a prop to the `Filters` component you will use to update the state from the `Filters` component.
5. Filter the tracks in the `App` component based on the filters stored in the state

<alert type="error">You should not store the filtered list of tracks in the state, because it is a computed value. (based on the original list of tracks and the filters that are already stored in the state.)</alert>

---

### Thinking in react

To build your app correctly, you first need to think of the minimal set of mutable states that your app needs.

To define if a data should be in the state or not, simply ask yourself three questions about each piece of data:

* Is it passed in from a parent via props? If so, it probably isn’t state.
* Does it remain unchanged over time? If so, it probably isn’t state.
* Can you compute it based on any other state or props in your component? If so, it isn’t state.

---

### Classifying variables

So you can classify variables inside a component in those different categories.

* **props:** read only parameters of the component
* **contexts:** like props it is read only
* **states:** mutable state of the component
* **constants:** they can be defined outside the component
* **computed values:** from other existing values
