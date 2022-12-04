---
layout: center
---

## Storybook

<Toc maxDepth="2" mode="onlySiblings"/>

---

### What is it ?

Storybook is a development environment for `UI` components: https://github.com/storybooks/storybook

It enforces the pattern of splitting your components into `UI` and business components.

Develop your business less `UI` components and render them in storybook with different props combinations.

Re-use and wrap them with your business components in your final app.

---

### Story

Story example:
```jsx
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
}

export const Primary = () => <Button background="#ff0" label="Foo" />;

export const Secondary = () => <Button background="#0ff" label="Bar" />;
```
