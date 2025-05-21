# ✅ Version 1: Basic useState()
## useState() to hold the count

```js
import React, {useState} from 'react'
export function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button data-testid="decrement-button" onClick={() => setCount(count - 1)}>-</button>
      <button data-testid="increment-button" onClick={() => setCount(count + 1)}>+</button>
      <p>clicked: {count}</p>
    </div>
  )
}
```

### Problem

```js
setCount(count + 1);
setCount(count + 1); // Won’t increment twice correctly!
```

### Solution
* use function instead: useState((prevState) => newState)

```js
setCount(c => c + 1);
setCount(c => c + 1); // Correctly increments twice
```

# ✅ Version 2: Functional Update
* updated code:

```js
import React, {useState} from 'react'
export function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button data-testid="decrement-button" onClick={() => setCount(count => count - 1)}>-</button>
      <button data-testid="increment-button" onClick={() => setCount(count => count + 1)}>+</button>
      <p>clicked: {count}</p>
    </div>
  )
}
```

### Problem
* React re-creates inline arrow functions on every render (() => setCount(...)), which can lead to:
  * Unnecessary re-renders in child components (if passed down as props)
  * Performance issues when the app grows

### Solution
* useCallback returns a stable reference, avoiding those re-renders.
* When it actually helps:
  * You're passing increase/decrease to child components
  * You use them as dependencies in other hooks (like useEffect)
  * Performance optimization in big apps

#### ✔️ Use when you pass callbacks down or optimize re-renders
#### ❌ Don’t overuse it in small, local-only components

# ✅ Version 3: useCallback()

* Updated code
```js
import React, {useState, useCallback} from 'react'
export function App() {
  const [count, setCount] = useState(0)
  const decrease = useCallback(() => setCount(count => count - 1), [])
  const increase = useCallback(() => setCount(count => count + 1), [])
  return (
    <div>
      <button data-testid="decrement-button" onClick={decrease}>-</button>
      <button data-testid="increment-button" onClick={increase}>+</button>
      <p>clicked: {count}</p>
    </div>
  )
}
```
# ✅ Version 4: useReducer() – Structured State Logic

```js
import React, { useReducer } from 'react';
const initialState = { count: 0 };
function reducer(state: {count: number}, action: {type: 'increment' | 'decrement'}) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
  }
}
export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button
        data-testid="decrement-button"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -
      </button>
      <button
        data-testid="increment-button"
        onClick={() => dispatch({ type: 'increment' })}
      >
        +
      </button>
      <p>clicked: {state.count}</p>
    </div>
  );
}
```

# 🗣️ How to Talk About This

*"I’d use useState with functional updates for simple counters, but once I’m passing down callbacks or optimizing rendering behavior, I’ll memoize them with useCallback. If the state logic becomes more complex—say, tracking multiple values or needing a clear state transition map—I’d switch to useReducer, especially if the team is used to Redux-like patterns."*



