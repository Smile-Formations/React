---
layout: center
---

## Child route

<Toc maxDepth="2" mode="onlySiblings"/>

---

### `Outlet`

Route can be nested to create complex navigation.

Example:
```jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

In that case you have to use the `Outlet` component in the parent component to choose where to render the child components.

Example:
```jsx
function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}
```

---

### Exercise

1. Create a `Header` component with a link to the homepage
2. Use the `logo.svg` in that header (images can be directly imported in JavaScript files thanks to `create-react-app`):

```jsx
import logo from '../../logo.svg';

function Example() {
  return (<img alt="Logo" src={logo} />);
}
```

3. Create a `Layout` component rendering the `Header` and `Outlet` components.
4. Use child routes to display the header through the Layout component for all our application routes.
