---
layout: center
---

## Tests

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Context

When a component depends on a context, you must provide it:
```jsx
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Categories from '../../contexts/categories';
import JukeBox from './JukeBox';

it('should render the category title', () => {
  // Provide here some mock value for categories:
  const categories = [];

  const wrapper = render((
    <Categories.Provider value={categories}>
      <JukeBox track={{category: 1}} />
    </Categories.Provider>
  ), {wrapper: MemoryRouter});

  expect(wrapper.find('.JukeBox__cell').at(1).text()).toEqual('Metal');
});
```

<!--
The final solution can be found in `versions/v3`
-->
