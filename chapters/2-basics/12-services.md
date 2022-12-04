---
layout: center
---

## Services

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Separation of concerns

For a better separation of concerns and re-usability you can also create some services/helpers as simple JavaScript module.

In those files you can write and export function you can then import in other parts of your app.

---

### Example

Example:
```jsx
// ./services/format.js
export function formatNumber(number) {
  return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 }).format(number)
}
```

Usage:
```jsx
import { formatNumber } from '../services/format';

formatNumber(9_999_999.9900);
```

---

### Exercise

Here create an `track.js` in a "services" folder that will manage the communication with the server.
