# Using Vanilla Redux

## Managing State with Vanilla Redux

This guide shows how to manage state in your React app using **Vanilla Redux** (without Redux Toolkit).

---

### Manual Setup

When not using Redux Toolkit (RTK), you must manually create both your **action creators** and your **reducer**.

---

#### 1. Action Creators

```js
export const increment = () => ({
    type: 'INCREMENT'
});

export const decrement = () => ({
    type: 'DECREMENT'
});

export const incrementByAmount = (amount) => ({
    type: 'INCREMENT_BY_AMOUNT',
    payload: amount
});
```

---

#### 2. Reducer

```js
const initialState = { value: 0 };

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: state.value + 1 };
        case 'DECREMENT':
            return { ...state, value: state.value - 1 };
        case 'INCREMENT_BY_AMOUNT':
            return { ...state, value: state.value + action.payload };
        default:
            return state;
    }
};
```

---

### Immutability in Vanilla Redux

> **Important:** In Vanilla Redux (no RTK, no Immer), you must always return a new state object.  
> **Direct mutation** (e.g., `state.value += 1`) is **NOT allowed** and will cause bugs.

**Example (Incorrect):**
```js
// ❌ Do NOT do this:
state.value += 1;
```

**Example (Correct):**
```js
// ✅ Always return a new object:
return { ...state, value: state.value + 1 };
```

**Why?**
- Redux relies on immutability for state updates and change detection.
- Direct mutation can break time-travel debugging, undo/redo, and React's ability to detect changes.

---

### React Local State vs Redux

- For local state with `useState`, you can update primitives directly:  
    `setCount(count + 1)`
- For objects/arrays, always return new copies:  
    `setObj({ ...obj, key: newValue })`

---

### Summary

Without RTK/Immer:
- **Always return a new state object** in Redux reducers.
- **Never mutate the state directly.**

Redux Toolkit (with Immer) lets you write "mutating" code safely, but Vanilla Redux does not.

---

> For most new projects, consider using [Redux Toolkit](https://redux-toolkit.js.org/) for a better developer experience.