---
layout: center
---

## Add route

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Link

You can create an internal link to another page of your page by using the `Link` component.

Example:
```jsx
<Link to="/some-url">Click here</Link>
```

---

### Exercise

Create the `/track` route for creating a new track:

1. Create a business/smart component `TrackPage` that will manage the track creation
2. Create a presentational/dumb component `TrackForm` that will display the styled form
3. Create a new method in track service to create a track:

```jsx
export function addTrack(track) {
  return fetch('http://localhost:3001/tracks', {
    body: JSON.stringify(track),
    headers: {'Content-Type': 'application/json'},
    method: 'POST'
  }).then(data => data.json());
}
```

4. Add a new route with path `/track` in the `App` component
5. Add a link in the `TracksPage` component pointing to that new page
