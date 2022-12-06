---
layout: center
---

## Delete track

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Exercise

1. Create a method in track service to delete a track: `DELETE` http://localhost:3001/tracks/:id

```jsx
export function removeArticle(id) {
  return fetch(`http://localhost:3001/tracks/${id}`, {
    method: "DELETE",
  }).then((data) => data.json());
}
```

2. Add a button in the `JukeBox` component to delete a track

<alert>Keep in mind the presentational / business separation.</alert>
