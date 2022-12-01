---
layout: intro
---

# Miscellaneous

<Toc maxDepth="1"/>

---
layout: center
---

## Alternative syntax

<Toc maxDepth="2" mode="onlySiblings"/>

---

### Class components

Alternatively of creating functional component there is a class based syntax for creating components.

A simple component:
```jsx
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>...</div>
    );
  }
}
```

---

### `PureComponent`

Alternatively you can extend your component from `PureComponent` and the component will only be re-rendered when props, state or contexts changes (like `memo`).

Hooks cannot be used inside classes so alternative methods exists for:

* props
* state
* effects
* contexts
* refs

---

### props

Props can be accessed everywhere in the class with `this.props`.

---

### State

* `this.state` Defines the state.
* The state is an object where you can put all your state values:

```jsx
class App extends Component {
  state = {
    count: 0,
    categories: []
  };
}
```

* You can update the state with `this.setState`.
* You can send partial state values to `this.setStat`e that will be merged at the first level:

```jsx
this.setState({ count: 1 });
```

* Like for hooks, `this.setState` accept an update function as argument.

---

### Effects

* Effects are replaced with lifecycle methods:

* When an instance of a component is being created and inserted into the DOM:
    * `constructor()`
    * `static getDerivedStateFromProps()`
    * `render()`
    * `componentDidMount()`
* When a component is being re-rendered:
    * `static getDerivedStateFromProps()`
    * `shouldComponentUpdate()`
    * `render()`
    * `componentDidUpdate()`
*  When a component is being removed from the DOM:
    * `componentWillUnmount()`

<!--
React lifecycle methods diagram: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
-->

---

### Contexts

You can retrieve a context by using the static property `contextType`.

If you need to retrieve multiple context values, you can use the `Consumer` property of the context object.

Example:
```jsx
import Theme from '../../contexts/theme-context';

class Example extends PureComponent {
  render() {
    return (
      <Theme.Consumer>
        {theme => <button style={{color: theme.co}}/>}
      </Theme.Consumer>
    );
  }
}
```

---

### Refs

You can create a ref for getting DOM elements with `createRef`.

Example:
```jsx
import { createRef } from 'react';

class Example extends PureComponent {
  ref = createRef();

  render() {
    return (
      <div ref={this.ref}>
        ...
      </div>
    );
  }
}
```

---

### Conclusion

Cons of using class components:

* Class syntax is bloated.
* You can’t use hooks (neither custom hooks).
* You can’t have multiple states.
* Contexts are harder to retrieve (the `Consumer` syntax is not easy to use).
* `JS` classes are not real classes thus you will face problems with `this` betting `undefined` in callbacks.
