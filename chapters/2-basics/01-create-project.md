---
layout: intro
---

# Basics

<Toc maxDepth="1"/>

---
layout: center
---

## Create project

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Scaffold project

1. create a new application (provide a custom project name which is used to create a directory):

```bash
npx create-react-app PROJECT_NAME
```

2. change directory to your project name
3. launch the app:

```bash
npm run start
```

4. it opens the URL http://localhost:3000/ in your browser

---

### Clean project

In `src` folder remove all following files:

- `App.css`
- `App.js`
- `App.test.js`
- `index.css`
- `reportWebVitals.js`

Write in `index.js`:

```jsx
import { createRoot } from 'react-dom/client';

const element = <div>Hell Yeah!</div>;
const root = createRoot(document.getElementById('root'));
root.render(element);
```
