
# Complete React Concepts Guide

A comprehensive guide to all React concepts with syntax, examples, and explanations to clear up confusion and build solid understanding.

## Table of Contents

1. [React Fundamentals](#react-fundamentals)
2. [Components](#components)
3. [JSX](#jsx)
4. [Props](#props)
5. [State](#state)
6. [React Hooks](#react-hooks)
7. [Event Handling](#event-handling)
8. [Conditional Rendering](#conditional-rendering)
9. [Lists and Keys](#lists-and-keys)
10. [Forms](#forms)
11. [Component Lifecycle](#component-lifecycle)
12. [Context API](#context-api)
13. [State Management Patterns](#state-management-patterns)
14. [Performance Optimization](#performance-optimization)
15. [Advanced Patterns](#advanced-patterns)
16. [Testing](#testing)
17. [Styling](#styling)

---

## React Fundamentals

### What is React?
React is a JavaScript library for building user interfaces, especially web applications. It helps you create interactive UIs by breaking them into reusable pieces called components.

### Key Principles
1. **Component-Based**: Build encapsulated components that manage their own state
2. **Declarative**: Describe what the UI should look like, React handles the how
3. **Virtual DOM**: React creates a virtual representation of the DOM for efficient updates

---

## Components

### What are Components?
Components are independent, reusable pieces of UI. Think of them like JavaScript functions that return HTML.

### Function Components (Modern Way)

**Syntax:**
```javascript
function ComponentName(props) {
  return <div>Hello World</div>;
}

// Or with arrow function
const ComponentName = (props) => {
  return <div>Hello World</div>;
};
```

**Example:**
```javascript
// Simple greeting component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="John" />
```

**Purpose:** 
- Reusable UI pieces
- Easier to test and maintain
- Encapsulate functionality

### Class Components (Legacy, but good to know)

**Syntax:**
```javascript
class ComponentName extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}
```

**When to use:** Modern React uses function components. Class components are legacy but you might see them in older codebases.

---

## JSX

### What is JSX?
JSX is a syntax extension for JavaScript that looks like HTML but is actually JavaScript. It makes writing React components more intuitive.

**Syntax:**
```javascript
const element = <h1>Hello, world!</h1>;
```

### JSX Rules

1. **Must return single parent element:**
```javascript
// ❌ Wrong - multiple elements
function Component() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

// ✅ Correct - wrapped in parent
function Component() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// ✅ Or use React Fragment
function Component() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}
```

2. **JavaScript expressions in curly braces:**
```javascript
function Component() {
  const name = "John";
  const age = 25;
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
      <p>Next year you'll be {age + 1}</p>
    </div>
  );
}
```

3. **Attributes use camelCase:**
```javascript
// ❌ HTML way
<div class="container" onclick="handleClick()">

// ✅ JSX way
<div className="container" onClick={handleClick}>
```

**Purpose:** Makes writing React components feel like writing HTML while having the power of JavaScript.

---

## Props

### What are Props?
Props (properties) are how you pass data from parent components to child components. They're like function parameters.

**Syntax:**
```javascript
// Parent component
function Parent() {
  return <Child name="John" age={25} isStudent={true} />;
}

// Child component
function Child(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

### Destructuring Props (Cleaner Way)
```javascript
// Instead of props.name, props.age
function Child({ name, age, isStudent }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

### Default Props
```javascript
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting />          // Shows "Hello, Guest!"
<Greeting name="John" /> // Shows "Hello, John!"
```

### Props are Read-Only
```javascript
function Child({ name }) {
  // ❌ Never do this - props are immutable
  name = "Changed"; // This won't work
  
  return <h1>{name}</h1>;
}
```

**Purpose:** 
- Pass data down the component tree
- Make components reusable with different data
- Communication from parent to child

---

## State

### What is State?
State is data that can change over time in a component. When state changes, the component re-renders to reflect the new data.

### useState Hook

**Syntax:**
```javascript
import { useState } from 'react';

function Component() {
  const [stateName, setStateName] = useState(initialValue);
  
  return <div>{stateName}</div>;
}
```

**Example - Counter:**
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial value is 0
  
  const increment = () => {
    setCount(count + 1); // Update state
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### Multiple State Variables
```javascript
function UserProfile() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  
  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
      />
      <input 
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))} 
        placeholder="Age" 
        type="number"
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
    </div>
  );
}
```

### State with Objects
```javascript
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: ''
  });
  
  const updateName = (newName) => {
    setUser({
      ...user,        // Keep existing properties
      name: newName   // Update only name
    });
  };
  
  return (
    <div>
      <input 
        value={user.name} 
        onChange={(e) => updateName(e.target.value)} 
      />
    </div>
  );
}
```

**Purpose:**
- Store data that changes over time
- Trigger re-renders when data changes
- Make components interactive

---

## React Hooks

Hooks are functions that let you "hook into" React features. They always start with "use".

### useState - State Management

**Purpose:** Add state to function components

**Example:**
```javascript
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}
```

### useEffect - Side Effects

**Purpose:** Perform side effects (API calls, subscriptions, timers, DOM manipulation)

**Syntax:**
```javascript
useEffect(() => {
  // Effect code
  
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]); // Dependencies array
```

**Examples:**

1. **Run once on mount:**
```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, []); // Empty array = run once
  
  return <div>{user?.name}</div>;
}
```

2. **Run when dependency changes:**
```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]); // Run when userId changes
  
  return <div>{user?.name}</div>;
}
```

3. **Cleanup (like componentWillUnmount):**
```javascript
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    // Cleanup function
    return () => clearInterval(interval);
  }, []);
  
  return <div>Seconds: {seconds}</div>;
}
```

### useContext - Context Consumption

**Purpose:** Access context values without nesting

**Example:**
```javascript
const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Header</div>;
}
```

### useReducer - Complex State Logic

**Purpose:** Manage complex state logic, alternative to useState

**Syntax:**
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

**Example:**
```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

### useMemo - Memoize Expensive Calculations

**Purpose:** Optimize performance by memoizing expensive calculations

**Example:**
```javascript
function ExpensiveComponent({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]); // Only recalculate when items change
  
  return <div>Total: {expensiveValue}</div>;
}
```

### useCallback - Memoize Functions

**Purpose:** Memoize function references to prevent unnecessary re-renders

**Example:**
```javascript
function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // Without useCallback, this function is recreated on every render
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []); // Empty deps = function never changes
  
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Child onClick={handleClick} />
    </div>
  );
}

const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
});
```

### Custom Hooks

**Purpose:** Extract and reuse stateful logic between components

**Example:**
```javascript
// Custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Usage
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

---

## Event Handling

### What are Events?
Events are actions that happen in the browser (clicks, form submissions, key presses, etc.)

**Syntax:**
```javascript
function Button() {
  const handleClick = (event) => {
    console.log('Button clicked!');
    console.log(event); // SyntheticEvent object
  };
  
  return <button onClick={handleClick}>Click me</button>;
}
```

### Common Events

```javascript
function EventExamples() {
  const handleClick = () => console.log('Clicked');
  const handleChange = (e) => console.log('Changed:', e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('Form submitted');
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter pressed');
    }
  };
  
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <input onChange={handleChange} onKeyPress={handleKeyPress} />
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

### Passing Arguments to Event Handlers

```javascript
function TodoList() {
  const todos = ['Learn React', 'Build App'];
  
  const handleDelete = (index) => {
    console.log('Delete todo at index:', index);
  };
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

**Purpose:** Make components interactive and respond to user actions.

---

## Conditional Rendering

### What is Conditional Rendering?
Showing different content based on certain conditions.

### If-Else with Variables

```javascript
function Greeting({ isLoggedIn, username }) {
  let content;
  
  if (isLoggedIn) {
    content = <h1>Welcome back, {username}!</h1>;
  } else {
    content = <h1>Please log in</h1>;
  }
  
  return <div>{content}</div>;
}
```

### Ternary Operator (Most Common)

```javascript
function Greeting({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, {username}!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}
```

### Logical AND (&&) for Simple Conditions

```javascript
function Notification({ hasNewMessages, messageCount }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {hasNewMessages && (
        <div className="notification">
          You have {messageCount} new messages!
        </div>
      )}
    </div>
  );
}
```

### Multiple Conditions

```javascript
function UserStatus({ user }) {
  const getStatusMessage = () => {
    if (!user) return "Loading...";
    if (user.isOnline) return "Online";
    if (user.lastSeen) return `Last seen: ${user.lastSeen}`;
    return "Offline";
  };
  
  return <div>Status: {getStatusMessage()}</div>;
}
```

**Purpose:** Show different UI based on application state or user conditions.

---

## Lists and Keys

### Rendering Lists

**Basic List:**
```javascript
function TodoList() {
  const todos = ['Learn React', 'Build App', 'Deploy'];
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
```

### Lists with Objects

```javascript
function UserList() {
  const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' }
  ];
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
```

### Why Keys are Important

```javascript
// ❌ Bad - using index as key
{todos.map((todo, index) => (
  <li key={index}>{todo}</li>
))}

// ✅ Good - using unique identifier
{todos.map(todo => (
  <li key={todo.id}>{todo.text}</li>
))}
```

**Keys help React:**
- Identify which items have changed
- Optimize re-rendering
- Maintain component state correctly

**Purpose:** Efficiently render dynamic lists of data.

---

## Forms

### Controlled Components (Recommended)

React controls the form data through state.

```javascript
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Form Validation

```javascript
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    
    if (!email) newErrors.email = 'Email is required';
    if (!email.includes('@')) newErrors.email = 'Invalid email';
    if (!password) newErrors.password = 'Password is required';
    if (password.length < 6) newErrors.password = 'Password too short';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login:', { email, password });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
```

**Purpose:** Collect and validate user input in a controlled manner.

---

## Component Lifecycle

### Function Component Lifecycle (with useEffect)

```javascript
function LifecycleExample({ userId }) {
  const [user, setUser] = useState(null);
  
  // ComponentDidMount equivalent
  useEffect(() => {
    console.log('Component mounted');
    fetchUser(userId).then(setUser);
  }, []); // Empty deps = run once on mount
  
  // ComponentDidUpdate equivalent
  useEffect(() => {
    console.log('userId changed, fetching new user');
    fetchUser(userId).then(setUser);
  }, [userId]); // Run when userId changes
  
  // ComponentWillUnmount equivalent
  useEffect(() => {
    return () => {
      console.log('Component will unmount');
      // Cleanup code here
    };
  }, []);
  
  return <div>{user?.name}</div>;
}
```

### Common Lifecycle Patterns

**Data Fetching:**
```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userData = await api.getUser(userId);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>Hello, {user.name}!</div>;
}
```

**Subscriptions:**
```javascript
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const subscription = chatAPI.subscribe(roomId, (message) => {
      setMessages(prev => [...prev, message]);
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, [roomId]);
  
  return (
    <div>
      {messages.map(msg => <div key={msg.id}>{msg.text}</div>)}
    </div>
  );
}
```

**Purpose:** Control when code runs during component's lifetime.

---

## Context API

### What is Context?
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### Creating and Using Context

**Step 1: Create Context**
```javascript
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
```

**Step 2: Create Provider**
```javascript
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**Step 3: Create Custom Hook**
```javascript
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

**Step 4: Use in Components**
```javascript
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={theme}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}

function Main() {
  const { theme } = useTheme();
  
  return (
    <main className={theme}>
      <p>Content goes here</p>
    </main>
  );
}
```

### Complex Context Example (Todo App)

```javascript
const TodoContext = createContext();

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider');
  }
  return context;
}
```

**Purpose:** Share state across multiple components without prop drilling.

---

## State Management Patterns

### Local State (useState)
**When to use:** Simple, component-specific state

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

### Lifted State
**When to use:** Share state between sibling components

```javascript
function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div>
      <Header user={user} />
      <LoginForm onLogin={setUser} />
    </div>
  );
}
```

### Context + useReducer
**When to use:** Complex state logic, multiple components need access

```javascript
// Already shown in Context API section
```

### Redux
**When to use:** Large applications, complex state interactions

```javascript
// Redux Toolkit example
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // RTK uses Immer internally
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

**Purpose:** Choose the right state management approach based on complexity and scope.

---

## Performance Optimization

### React.memo
**Purpose:** Prevent unnecessary re-renders of components

```javascript
const ExpensiveChild = React.memo(({ data, onUpdate }) => {
  console.log('ExpensiveChild rendered');
  
  return (
    <div>
      <h3>{data.title}</h3>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const [data] = useState({ title: 'Static Data' });
  
  const handleUpdate = useCallback(() => {
    console.log('Update clicked');
  }, []);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {/* ExpensiveChild won't re-render when count changes */}
      <ExpensiveChild data={data} onUpdate={handleUpdate} />
    </div>
  );
}
```

### useMemo for Expensive Calculations

```javascript
function ProductList({ products, searchTerm }) {
  // This calculation only runs when products or searchTerm change
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);
  
  return (
    <div>
      {filteredProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### useCallback for Function Memoization

```javascript
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // This function reference stays the same unless todos change
  const addTodo = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);
  }, []);
  
  // This function reference changes when filter changes
  const toggleTodo = useCallback((id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }, []);
  
  return (
    <div>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}
```

**Purpose:** Optimize performance by preventing unnecessary calculations and re-renders.

---

## Advanced Patterns

### Higher-Order Components (HOCs)

**Purpose:** Reuse component logic

```javascript
function withLoading(Component) {
  return function WithLoadingComponent(props) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// Usage
const UserProfileWithLoading = withLoading(UserProfile);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  
  return (
    <UserProfileWithLoading 
      isLoading={isLoading} 
      user={user} 
    />
  );
}
```

### Render Props

**Purpose:** Share code between components using a prop whose value is a function

```javascript
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);
  
  return render({ data, loading, error });
}

// Usage
function App() {
  return (
    <DataFetcher 
      url="/api/users" 
      render={({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
        return (
          <ul>
            {data.map(user => <li key={user.id}>{user.name}</li>)}
          </ul>
        );
      }}
    />
  );
}
```

### React Portals

**Purpose:** Render children into a DOM node outside the parent component's DOM hierarchy

```javascript
import { createPortal } from 'react-dom';

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Renders outside React app root
  );
}

// Usage
function App() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal Content</h2>
        <p>This is rendered in a portal!</p>
      </Modal>
    </div>
  );
}
```

### Error Boundaries

**Purpose:** Catch JavaScript errors anywhere in the child component tree

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <Main />
      <Footer />
    </ErrorBoundary>
  );
}
```

### React Suspense & Lazy Loading

**Purpose:** Code splitting and loading states for better performance

```javascript
import { Suspense, lazy } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));
const Settings = lazy(() => import('./Settings'));

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentPage('profile')}>Profile</button>
        <button onClick={() => setCurrentPage('settings')}>Settings</button>
      </nav>
      
      <Suspense fallback={<div>Loading page...</div>}>
        {renderPage()}
      </Suspense>
    </div>
  );
}
```

---

## Testing

### Basic Component Testing

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial count', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
  
  test('increments count when button clicked', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    
    fireEvent.click(button);
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
  
  test('decrements count when button clicked', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /decrement/i });
    
    fireEvent.click(button);
    
    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });
});
```

### Testing Components with Props

```javascript
import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

describe('UserCard', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    isActive: true
  };
  
  test('displays user information', () => {
    render(<UserCard user={mockUser} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });
  
  test('shows inactive status for inactive users', () => {
    const inactiveUser = { ...mockUser, isActive: false };
    render(<UserCard user={inactiveUser} />);
    
    expect(screen.getByText('Inactive')).toBeInTheDocument();
  });
});
```

### Testing Hooks

```javascript
import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  test('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter());
    
    expect(result.current.count).toBe(0);
  });
  
  test('should initialize with provided value', () => {
    const { result } = renderHook(() => useCounter(10));
    
    expect(result.current.count).toBe(10);
  });
  
  test('should increment count', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});
```

### Testing with Context

```javascript
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import ThemedButton from './ThemedButton';

const renderWithTheme = (component, theme = 'light') => {
  return render(
    <ThemeProvider value={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('ThemedButton', () => {
  test('applies light theme styles', () => {
    renderWithTheme(<ThemedButton>Click me</ThemedButton>, 'light');
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('light-theme');
  });
  
  test('applies dark theme styles', () => {
    renderWithTheme(<ThemedButton>Click me</ThemedButton>, 'dark');
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('dark-theme');
  });
});
```

---

## Styling

### CSS Modules

**Purpose:** Scoped CSS to avoid naming conflicts

```css
/* Button.module.css */
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}
```

```javascript
// Button.js
import styles from './Button.module.css';

function Button({ variant = 'primary', children, ...props }) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Styled Components

**Purpose:** CSS-in-JS with dynamic styling

```javascript
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  font-size: ${props => props.size === 'large' ? '18px' : '14px'};
  
  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Usage
function App() {
  return (
    <div>
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Secondary Button</StyledButton>
      <StyledButton primary size="large">Large Primary</StyledButton>
    </div>
  );
}
```

### Styled Components with Themes

```javascript
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px'
  }
};

const ThemedButton = styled.button`
  padding: ${props => props.theme.spacing.medium};
  background-color: ${props => props.theme.colors[props.variant || 'primary']};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ThemedButton variant="primary">Primary</ThemedButton>
        <ThemedButton variant="success">Success</ThemedButton>
        <ThemedButton variant="danger">Danger</ThemedButton>
      </div>
    </ThemeProvider>
  );
}
```

### Inline Styles

**Purpose:** Dynamic styling based on state/props

```javascript
function ProgressBar({ progress, color = 'blue' }) {
  const containerStyle = {
    width: '100%',
    height: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    overflow: 'hidden'
  };
  
  const fillStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: color,
    transition: 'width 0.3s ease'
  };
  
  return (
    <div style={containerStyle}>
      <div style={fillStyle} />
    </div>
  );
}

// Usage
function App() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => prev < 100 ? prev + 1 : 0);
    }, 100);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div>
      <ProgressBar progress={progress} color="green" />
      <p>{progress}% Complete</p>
    </div>
  );
}
```

---

## React Router (Navigation)

### Basic Routing Setup

```javascript
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```

### Dynamic Routes with Parameters

```javascript
import { useParams, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserList() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];
  
  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>User Detail - ID: {id}</h1>
      <button onClick={() => navigate('/')}>Back to Users</button>
    </div>
  );
}
```

### Protected Routes

```javascript
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth(); // Custom hook
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Data Fetching Patterns

### Basic Fetch with useEffect

```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch user');
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

### Custom Hook for Data Fetching

```javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserList() {
  const { data: users, loading, error } = useFetch('/api/users');
  
  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### React Query (TanStack Query)

```javascript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Fetch users
function UserList() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json())
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Create user with mutation
function CreateUser() {
  const queryClient = useQueryClient();
  
  const createUserMutation = useMutation({
    mutationFn: (newUser) => 
      fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      }).then(res => res.json()),
    onSuccess: () => {
      // Invalidate and refetch users list
      queryClient.invalidateQueries(['users']);
    }
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    createUserMutation.mutate({
      name: formData.get('name'),
      email: formData.get('email')
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit" disabled={createUserMutation.isLoading}>
        {createUserMutation.isLoading ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
}
```

---

## Common Patterns & Best Practices

### Container/Presentational Pattern

```javascript
// Presentational Component (UI only)
function UserListPresentation({ users, loading, error, onUserClick }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => onUserClick(user)}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

// Container Component (Logic)
function UserListContainer() {
  const { data: users, loading, error } = useFetch('/api/users');
  
  const handleUserClick = (user) => {
    console.log('User clicked:', user);
    // Handle user selection logic
  };
  
  return (
    <UserListPresentation
      users={users || []}
      loading={loading}
      error={error}
      onUserClick={handleUserClick}
    />
  );
}
```

### Compound Components Pattern

```javascript
function Tabs({ children, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="tabs">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { activeTab, setActiveTab, index })
      )}
    </div>
  );
}

function TabList({ children, activeTab, setActiveTab }) {
  return (
    <div className="tab-list">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { 
          isActive: activeTab === index,
          onClick: () => setActiveTab(index)
        })
      )}
    </div>
  );
}

function Tab({ children, isActive, onClick }) {
  return (
    <button 
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function TabPanels({ children, activeTab }) {
  return (
    <div className="tab-panels">
      {React.Children.toArray(children)[activeTab]}
    </div>
  );
}

function TabPanel({ children }) {
  return <div className="tab-panel">{children}</div>;
}

// Usage
function App() {
  return (
    <Tabs defaultTab={0}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
```

---

## Summary

This comprehensive guide covers all major React concepts:

### **Fundamentals**
- Components, JSX, Props, State
- Event handling, conditional rendering, lists

### **Hooks**
- Built-in hooks (useState, useEffect, useContext, useReducer, useMemo, useCallback)
- Custom hooks for reusable logic

### **State Management**
- Local state, lifted state, Context API, Redux patterns

### **Performance**
- React.memo, useMemo, useCallback optimization techniques

### **Advanced Patterns**
- HOCs, render props, portals, error boundaries, suspense

### **Routing & Navigation**
- React Router for single-page applications

### **Data Fetching**
- useEffect patterns, custom hooks, React Query

### **Testing**
- Component testing, hook testing, context testing

### **Styling**
- CSS Modules, Styled Components, inline styles

### **Best Practices**
- Container/presentational pattern, compound components

**Purpose:** This guide provides a complete reference for React development, from beginner concepts to advanced patterns. Each concept includes syntax, examples, and explanations of when and why to use them.

Use this guide as a reference while building React applications, and practice implementing these patterns in your projects to solidify your understanding.