---
layout: center
---

## `SSR`

<Toc maxDepth="2" mode="onlySiblings"/>

---

### `renderToString`

`SSR` is possible with React thanks to the virtual `DOM`.

You can set up a node server that will send you the `HTML` from React components by using a special `renderToString()` method:

```jsx
import ReactDOMServer from 'react-dom/server';
const html = ReactDOMServer.renderToString(<Component />);
```

---

### Frameworks

If you want an isomorphic app, or a static export from your application, you can check out following framework:

* <a target="_blank" href="https://nextjs.org/docs/getting-started">`Next.js`</a>
* `Gatsby`
* `Remix`
