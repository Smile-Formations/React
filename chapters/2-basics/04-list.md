---
layout: center
---

## List

<Toc maxDepth="2" mode="onlySiblings"/>

---

### `List` component

Let’s create a new `List` component and:

1. Import the `JukeBox` component.
2. That component will receive a `tracks` props that is an array of tracks.
3. Use that array to generate a list of `JukeBox` components by using the `map`:

```jsx
function List(props) {
  const { tracks } = props;
  return (
    <div className="List">
      {tracks.map(track => (
        <JukeBox track={track} />
      ))}
    </div>
  );
}
```
In react, all (non static) list of components are managed this way.

---

### Array of article

Update the `App` component to use the List component:

1. Import the List component.
2. Create an articles variable that is an array of tracks:

```jsx
const tracks = [
  /* Add some articles */
];
```

3. Render the List and pass it the tracks variables.

---

### `key` attribute

When you run this code, you’ll be given a warning that a key should be provided for list items.

A key is a special string attribute you need to include when creating lists of elements.

They help React identify which items have changed, are added, or are removed.

Keys should be given to the elements inside the array to give the elements a stable identity (typically an id).

Remove the warning with:
```jsx
{tracks.map(track => (
  <JukeBox track={track} key={track.id} />
))}
```

---

### Without the `key` attribute

Imagine we want to reorder the list.

Without the `key` attribute the array index is used to identify each item in the iteration:

![3 DOM updates are needed](/without-key.png)

---

### With the `key` attribute

Use an id to identify each item of the iteration:

![Only 1 DOM update is needed](/with-key.png)
