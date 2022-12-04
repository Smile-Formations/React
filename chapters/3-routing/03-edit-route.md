---
layout: center
---

## Edit route

<Toc maxDepth="2" mode="onlySiblings"/>

---

### URL parameter

You can define a parameterized URL in the Route path with:
```jsx
<Route path="example/:exampleId" element={<Example />}/>
```

Then in the `Example` component you can read the parameter with the `useParams` hook.

Example:
```jsx
function Example() {
  const { exampleId } = useParams();
  return (
    <div>URL parameter is "{exampleId}"</div>
  );
}
```

---

### Exercise

Create the `/track/:id` route for editing a track:

1. Create two methods in track service:
    1. a method to fetch one track: `GET` http://localhost:3001/tracks/:id
    ```jsx
    export function getTrack(id) {
      return fetch(`http://localhost:3001/tracks/${id}`).then((data) => data.json());
    }
    ```
    2. a method to update one track: `PUT` http://localhost:3001/tracks/:id
    ```jsx
    export function updateTrack(track) {
      return fetch(`http://localhost:3001/tracks/${track.id}`, {
        body: JSON.stringify(track),
        headers: { "Content-Type": "application/json" },
        method: "PUT",
      }).then((data) => data.json());
    }
    ```
2. Update `TrackPage` to fetch a track if an id is provided from the route.
3. use the hook `useParams` to get the route params.
4. Add the route in the `App` component
5. Add a link in the `JukeBox` component
