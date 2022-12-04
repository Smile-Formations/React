---
layout: center
---

## Children

<Toc maxDepth="2" mode="onlySiblings"/>

---

### A special prop

For now, we only use self closed components like:
```jsx
<JukeBox />
```

But there is a special `children` prop you can use in your component that will contain the `JSX` that will be added between the start and end tags like:
```jsx
<JukeBox>
  <p>Hell Yeah !</p>
</JukeBox>
```

This is equivalent to:
```jsx
<JukeBox children={<p>Hell Yeah !</p>} />
```

---

### Exercise

Create a Container component to wrap the List component.
