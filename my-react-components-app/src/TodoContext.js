import { createContext, useReducer, useContext } from 'react';

// 1. Define the Reducer Function
// This function handles all state transitions based on dispatched actions.
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(), // Generate a simple unique ID
          text: action.payload,
          isCompleted: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload ? 
        { 
          ...todo, 
          isCompleted: !todo.isCompleted
        } 
        : todo
      );
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// 2. Define the Initial State
const initialTodos = [];

// 3. Create two Contexts: one for the state and one for the dispatch function.
// This is a common practice to optimize performance.
const TodoStateContext = createContext(initialTodos);
const TodoDispatchContext = createContext(null);

// 4. Create a "Provider" Component that wraps your app.
// This component will use useReducer and provide the state and dispatch to its children.
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={state}>
        {children}
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
};

// 5. Create Custom Hooks to consume the contexts.
// This is a cleaner way to use the contexts and prevents potential errors.
export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (context === undefined) {
    throw new Error('useTodoState must be used within a TodoProvider');
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (context === undefined) {
    throw new Error('useTodoDispatch must be used within a TodoProvider');
  }
  return context;
};