---
layout: center
---

## Tests

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Component test

`creat-react-app` uses `jest` (https://facebook.github.io/jest/) as test runner.

Start by creating a `App.spec.js` (or `App.test.js`) for testing the `App` component with:
```jsx
import { render } from 'react-dom';
import App from './App';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
```

---

### Mocks

`jest.mock('../../services/track/track');` will replace the service with a mock that you provide in a `__mocks__` folder.

Exemple for the track service:
```jsx
export const getTracks = () =>
Promise.resolve(/* Some static tracks */ );
```

---

### Run tests

Run the tests (watch mode):
```bash
npm run test
```

Run the tests with code coverage:
```bash
npm run test -- --coverage
```

---

### Rendering component

Here the effect inside the App component will not be triggered because the component is not mounted.

For that we have to append it the body element:
```jsx
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

it('renders without crashing', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  render(<App />, div);
  unmountComponentAtNode(div);
  div.remove();
});
```

---

### State update and `act`

The effect is triggered but an error shows up.

Insides tests, we must wrap state updates with act:
```jsx
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

it('renders without crashing', async () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  await act(async () => {
    render(<App />, div);
  });
  unmountComponentAtNode(div);
  div.remove();
});
```

---

### Assertions

Time to add some assertions:
```jsx
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

it('renders without crashing', async () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  await act(async () => {
    render(<App />, div);
  });
  const elements = div.querySelectorAll('.JukeBox');
  expect(elements.length).toBe(3);
  unmountComponentAtNode(div);
  div.remove();
});
```

---

### Events

And test events:
```jsx
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

it('filters the tracks', async () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  await act(async () => {
    render(<App />, div);
  });
  const input = container.querySelectorAll('[name=band]')[1];
  await act(async () => {
    input.dispatchEvent(new MouseEvent("change", {bubbles : true}));
  });
  expect(div.querySelectorAll('.JukeBox').length).toBe(3);
  unmountComponentAtNode(div);
  div.remove()
});
```

---

### Grouping

You can regroup tests together with describe:
```jsx
describe('App component', () => {

  it('renders without crashing', ...);

  it('filters the tracks', ...);

});
```

---

### `beforeEach` and `afterEach`

And you can define functions that will be run before an after each test with `beforeEach` and `afterEach`:
```jsx
describe('App component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders without crashing', ...);
});
```

---

### React testing library

All this setup can be simplified by using `testing-library` (already include with `create-react-app`).

`testing-library` brings some utilities that will ease your tests.

You can now simply render a component with:
```jsx
import { render } from '@testing-library/react';
import App from './App';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

it('renders without crashing', async () => {
  render(<App />);
});
```

---

### Accessing DOM

Get elements with:
```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

it('renders without crashing', () => {
  render(<App />);
  const elements = await screen.findAllByText(/JukeBox/);
  expect(elements.length).toBe(3);
});
```

---

### Events

Dispatch events with:
```jsx
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

it('renders without crashing', () => {
  render(<App />);
  fireEvent.click(screen.getByLabelText('Band'));
  const elements = await screen.findAllByText(/JukeBox/);
  expect(elements.length).toBe(3);
});
```

---

### Spy

You can test component callbacks by using a spy:
```jsx
it('should call onFilterChanged when filter changes', () => {
  const onFilterChanged = jest.fn();
  render(<Filters onFilterChanged={onFilterChanged} />);
  fireEvent.click(screen.getByLabelText('Band'));
  expect(onFilterChanged).toBeCalledWith('band', 'band');
});
```

---

### Custom hooks

Custom hooks can be hard to test because they need a component to handle them.

`testing-library` will help us again with the setup:
```bash
npm i --save-dev @testing-library/react-hooks
```

Then we can test a custom hook with:
```jsx
it('loads the categories', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useCategories());
  expect(result.current.length).toEqual(0);
  await waitForNextUpdate();
  expect(result.current.length).not.toEqual(0);
});
```

The output of the hook is available inside `result.current`.

---

### State update and `act`

Do not forget to wrap state updates with act:
```jsx
it('updates the tracks', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFilteredTracks());
  await waitForNextUpdate();
  act(() => result.current.setTracks([
      {
          "id": 1,
          "title": "Find The Real",
          "album": "One Day Remains",
          "band": "Alter Bridge",
          "year": "2004",
          "poster": "https://i.ebayimg.com/images/g/OqoAAOSwJYVg1y6E/s-l500.jpg",
          "url": "https://www.youtube.com/watch?v=w9LZ0OkdxGg&ab_channel=AlterBridge-Topic",
          "category": 3,
          "description": "One Day Remains is the debut studio album by the American hard rock band Alter Bridge, released on August 10, 2004, on Wind-up Records."
      }
  ]));
  expect(result.current.tracks.length).toEqual(1);
});
```

---

### Mocking `HTTP` requests

To test services we must install a mock for the `fetch` function:
```bash
npm i --save-dev jest-fetch-mock
```

And test the service:
```jsx
import fetchMock from "jest-fetch-mock";
import { getCategories } from './category';

fetchMock.enableMocks();
describe('category service', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('getCategories', async () => {
    fetch.mockResponseOnce(JSON.stringify([{ id: 42 }]));
    const categories = await getCategories();
    expect(categories.length).toEqual(1);
    expect(fetch).toHaveBeenCalledWith('/categories');
  });
});
```

<!--
The final solution can be found in `versions/v1`
-->
