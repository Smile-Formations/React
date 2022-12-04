---
layout: center
---

## Environment variables

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Available variables

By default, you will have access to some environment variable like:

* `NODE_ENV`: Current environment
* `PUBLIC_URL`: Relative URL of your app

---

### `NODE_ENV`

`NODE_ENV` will have the following values:

* `development`: when running your app with npm run start
* `test`: when running the tests with npm run test
* `production`: when running the app build

---

### `PUBLIC_URL`

`PUBLIC_URL` is empty and assumes your app is hosted at the server root.

To override this, set the `homepage` in your `package.json`.

For example:
```json
{
  "homepage": "http://mywebsite.com/relativepath"
}
```

In that case `PUBLIC_URL` will equal `/relativepath` in production mode.

If you don’t use routing, you might want to use relative paths:
```json
{
  "homepage": "."
}
```

---

### Using variables

You can access the value of an environment variable in your `JS` files with `process.env.VAR_NAME`.

For example:
```jsx
function Example() {
  return (<img src={process.env.PUBLIC_URL + '/img/logo.png'}/>);
}
```

Or in `index.html`:
```html
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```

---

### Env files

You can create your own environment variables by creating a `.env` file at the root of the project.

`.env` files should be checked into source control (with the exclusion of `.env*.local`).

Available file names:
* `.env`: Default.
* `.env.local`: Local overrides (not loaded forThis file is loaded for all environments except test).
* `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
* `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific

---

### Custom variables

And in these `.env` files you can set custom environment variables like:

```
REACT_APP_NOT_SECRET_CODE=abcdef
```

Environment variables should start with `REACT_APP_`.
