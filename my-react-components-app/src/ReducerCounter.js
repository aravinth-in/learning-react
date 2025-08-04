import { useReducer } from 'react';

// 1. Define the Reducer Function
// It takes the current state and an action, and returns the new state.
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // Return a new state object
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'INCREMENT_BY_AMOUNT':
      // The action can carry a 'payload' with additional data
      return { count: state.count + action.payload };
    default:
      // Always throw an error for unhandled actions in development
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// 2. Define the Initial State
const initialCounterState = { count: 0 };

const ReducerCounter = () => {
  // 3. Use the useReducer Hook
  // It returns the current state and a dispatch function.
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px', backgroundColor: '#e8f5e9', textAlign: 'center' }}>
      <h2>`useReducer` Counter</h2>
      <p style={{ fontSize: '3em', margin: '10px 0', color: '#4CAF50' }}>
        Count: {state.count}
      </p>
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })} // Dispatch an action
        style={{ margin: '5px', padding: '8px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        style={{ margin: '5px', padding: '8px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        style={{ margin: '5px', padding: '8px 15px', backgroundColor: '#607d8b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Reset
      </button>
      <button
        onClick={() => dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: 5 })} // Action with a payload
        style={{ margin: '5px', padding: '8px 15px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Increment by 5
      </button>
    </div>
  );
};

export default ReducerCounter;