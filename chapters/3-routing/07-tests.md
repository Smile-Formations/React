---
layout: center
---

## Tests

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Wrapping tests

When rendering components in tests, you may have errors with react router components like Route or Link waiting for some specific context.

To get the needed context you can wrap your tests in a `MemoryRouter`:

```jsx
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TrackPage from './TrackPage';

it('renders without crashing', () => {
  render(<TrackPage />, { wrapper: MemoryRouter });
});
```

<!--
The final solution can be found in `versions/v2`
-->
