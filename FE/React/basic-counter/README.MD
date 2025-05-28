# ✅ Version 1: Basic useState()
## useState() to hold the count

```tsx
import React, {useState} from 'react'
export function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>Count: {count}</div>
    </div>
  )
}
```

### Problem

```tsx
setCount(count + 1);
setCount(count + 1); // Won’t increment twice correctly!
```

### Solution
* use function instead: useState((prevState) => newState)

```
setCount(c => c + 1);
setCount(c => c + 1); // Correctly increments twice
```

# ✅ Version 2: Functional Update
* updated code:

```tsx
import React, {useState} from 'react'
export function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <div>Count: {count}</div>
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
```tsx
import React, {useState, useCallback} from 'react'
export function App() {
  const [count, setCount] = useState(0)
  const decrease = useCallback(() => setCount(count => count - 1), [])
  const increase = useCallback(() => setCount(count => count + 1), [])
  return (
    <div>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <div>Count: {count}</div>
    </div>
  )
}
```
# ✅ Version 4: useReducer() – Structured State Logic

```tsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
      <button onClick={() => dispatch({ type: 'increment' })}> + </button>
      <div>Count: {state.count}</div>
    </div>
  );
}
```

# 🗣️ How to Talk About This

*"I’d use useState with functional updates for simple counters, but once I’m passing down callbacks or optimizing rendering behavior, I’ll memoize them with useCallback. If the state logic becomes more complex—say, tracking multiple values or needing a clear state transition map—I’d switch to useReducer, especially if the team is used to Redux-like patterns."*


# ✅ `useCounter` hook that manages a counter state

#### Implement a `useCounter` hook that manages a counter state, with some additional convenience utility methods.

```tsx
export default function Component() {
  const { count, increment, decrement, reset, setCount } = useCounter();

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// ...

import { useState } from 'react';

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    increment: () => setCount((x) => x + 1),
    decrement: () => setCount((x) => x - 1),
    reset: () => setCount(initialValue),
    setCount,
  };
}

```




