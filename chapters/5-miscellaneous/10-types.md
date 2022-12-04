---
layout: center
---

## Types

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Options

There is about three ways of typing your app:

1. `PropTypes`: runtime type checker for props only (legacy and not recommended)
2. `Flow`: static type checker
3. `Typescript`: static type checker (recommended)

---

### `PropTypes`

You can add some information about the types of the props you need for a component by using the prop-types library.

Example for the `Filters.jsx` component:
```jsx
Filters.propTypes = {
  filters: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string
  }),
  onFilterChanged: PropTypes.func
};
```

---

### `Flow`

Flow is a static type checker developed by Facebook.

You can add it to your creat-react-app project with:
```bash
npm install --save-dev flow-bin
```

Then add "flow":"flow" to the "scripts" section of your `package.json`.

And initialize flow:
```bash
npm run flow init
```

---

### `Typescript`


Or if you prefer typescript, you can initialize your project with:
```bash
npx create-react-app my-app --template typescript
```

Or add it later with in your `creat-react-app` project:
```bash
npm install --save-dev typescript @types/node @types/react
npm install --save-dev @types/react-dom @types/jest
```

You will have to rename your files:

* components (or file that contains `JSX`) with the `tsx` extension
* other `JS` files with the `ts` extension
