# React Learning Components

A comprehensive React learning project that demonstrates various React concepts, patterns, and best practices. This project serves as a practical reference for React development, covering everything from basic components to advanced state management.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 📚 Project Overview

This project is organized as a learning resource that demonstrates React concepts through practical, working examples. Each component and feature is designed to showcase specific React patterns and best practices.

### 🛠 Tech Stack

- **React 19.1.0** - Latest React with modern features
- **Redux Toolkit 2.8.2** - Modern Redux state management
- **React Redux 9.2.0** - React bindings for Redux
- **Redux Saga 1.3.0** - Side effect management
- **React Router DOM 7.7.1** - Client-side routing
- **Styled Components 6.1.19** - CSS-in-JS styling
- **React Query 5.84.1** - Server state management
- **React Testing Library** - Component testing utilities

## 📁 Project Structure

```
src/
├── app/                    # Redux store configuration
│   └── store.js           # RTK store setup with saga middleware
├── components/            # Reusable UI components
│   ├── Counter.js         # Basic useState example
│   ├── TodoApp.js         # Context API demonstration
│   ├── PostsList.js       # Redux Saga integration
│   ├── StyledComponentsDemo.js  # CSS-in-JS styling
│   ├── PortalDemo.js      # React Portals
│   ├── Modal.js           # Portal-based modal
│   ├── MemoizedChild.js   # React.memo optimization
│   ├── NonMemoizedChild.js # Performance comparison
│   └── ...               # Many more examples
├── features/              # Redux feature slices
│   ├── counter/           # Counter with RTK
│   └── posts/             # Async data fetching
├── hooks/                 # Custom React hooks
│   ├── useToggle.js       # Toggle state hook
│   └── useWindowSize.js   # Window size tracking
├── pages/                 # Route components
├── sagas/                 # Redux Saga effects
├── styles/                # Global styles
├── tests/                 # Component tests
├── ThemeContext.js        # Context API example
├── TodoContext.js         # useReducer + Context
├── CustomHooksDemo.js     # Custom hooks showcase
├── PerformanceDemo.js     # Performance optimization
└── App.js                 # Main application
```

## 🎯 Learning Concepts Covered

### 1. **React Fundamentals**
- **Components**: Functional components with modern React patterns
- **JSX**: JavaScript XML syntax and best practices
- **Props**: Component communication and prop validation
- **State**: Local component state management

### 2. **React Hooks**

#### Built-in Hooks
- **useState** - Local state management
  ```javascript
  const [count, setCount] = useState(0);
  ```

- **useEffect** - Side effects and lifecycle
  ```javascript
  useEffect(() => {
    // Effect logic
    return () => {
      // Cleanup
    };
  }, [dependencies]);
  ```

- **useContext** - Context consumption
  ```javascript
  const theme = useContext(ThemeContext);
  ```

- **useReducer** - Complex state logic
  ```javascript
  const [state, dispatch] = useReducer(reducer, initialState);
  ```

- **useMemo** - Expensive computation memoization
  ```javascript
  const expensiveValue = useMemo(() => 
    calculateExpensiveValue(count), [count]
  );
  ```

- **useCallback** - Function memoization
  ```javascript
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

#### Custom Hooks
- **useToggle** - Boolean state toggle functionality
- **useWindowSize** - Window dimensions tracking

### 3. **State Management Patterns**

#### Local State (useState)
```javascript
// Simple counter example
const [count, setCount] = useState(0);
```

#### Context API + useReducer
```javascript
// Global state without external libraries
const TodoContext = createContext();
const [todos, dispatch] = useReducer(todoReducer, []);
```

#### Redux Toolkit (RTK)
```javascript
// Modern Redux with RTK
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // RTK uses Immer internally
    }
  }
});
```

#### Redux Saga
```javascript
// Side effect management
function* fetchPostsSaga() {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(postsLoaded(posts));
  } catch (error) {
    yield put(postsError(error.message));
  }
}
```

### 4. **Performance Optimization**

#### React.memo
```javascript
// Prevent unnecessary re-renders
const MemoizedChild = React.memo(({ value, onClick }) => {
  return <div onClick={onClick}>{value}</div>;
});
```

#### useMemo & useCallback
- **useMemo**: Memoize expensive calculations
- **useCallback**: Memoize function references

### 5. **Styling Approaches**

#### CSS Modules
```javascript
import styles from './Component.module.css';
<div className={styles.container} />
```

#### Styled Components
```javascript
const StyledButton = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  &:hover {
    opacity: 0.8;
  }
`;
```

#### Inline Styles
```javascript
<div style={{ color: 'red', fontSize: '16px' }} />
```

### 6. **Advanced React Patterns**

#### React Portals
```javascript
// Render outside parent DOM hierarchy
return createPortal(
  <Modal>{children}</Modal>,
  document.getElementById('modal-root')
);
```

#### Render Props Pattern
```javascript
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)} />
```

#### Higher-Order Components (HOCs)
```javascript
const withLoading = (Component) => (props) => {
  if (props.isLoading) return <div>Loading...</div>;
  return <Component {...props} />;
};
```

### 7. **Testing**
- **React Testing Library** - Component testing
- **Jest** - Test runner and assertions
- **User Event** - User interaction simulation

Example test:
```javascript
test('should increment count when button clicked', () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: 'Increment' });
  fireEvent.click(button);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

## 🧩 Key Components Explained

### Counter (`/components/Counter.js`)
Basic useState demonstration with increment/decrement functionality.

### TodoApp (`/components/TodoApp.js`)
Complete todo application using Context API and useReducer for global state management.

### PostsList (`/components/PostsList.js`)
Demonstrates Redux Saga for async data fetching from external APIs.

### PerformanceDemo (`/PerformanceDemo.js`)
Shows performance optimization techniques:
- useMemo for expensive calculations
- useCallback for function memoization
- React.memo for component memoization

### CustomHooksDemo (`/CustomHooksDemo.js`)
Showcases custom hooks:
- useToggle for boolean state management
- useWindowSize for responsive design

### StyledComponentsDemo (`/components/StyledComponentsDemo.js`)
CSS-in-JS styling with dynamic props and pseudo-selectors.

### PortalDemo (`/components/PortalDemo.js`)
React Portals for rendering components outside normal DOM hierarchy.

## 🔄 State Management Comparison

| Pattern | Use Case | Complexity | Performance |
|---------|----------|------------|-------------|
| useState | Local component state | Low | High |
| Context + useReducer | Medium-scale global state | Medium | Medium |
| Redux Toolkit | Large-scale applications | High | High |
| Redux Saga | Complex async flows | High | High |

## 🎨 Styling Approaches Comparison

| Method | Pros | Cons | Use Case |
|--------|------|------|---------|
| CSS Modules | Scoped styles, familiar CSS | Build step required | Component-specific styles |
| Styled Components | Dynamic styling, theme support | Runtime overhead | Design systems |
| Inline Styles | Dynamic, no build step | Limited CSS features | Conditional styling |

## 🧪 Testing Strategy

The project includes comprehensive testing examples:

1. **Unit Tests** - Individual component functionality
2. **Integration Tests** - Component interaction
3. **User Interaction Tests** - Simulated user behavior

## 📖 Learning Path Recommendations

### Beginner
1. Start with `Counter.js` - Basic useState
2. Explore `Greeting.js` - Props and JSX
3. Study `EffectCounter.js` - useEffect basics

### Intermediate
1. `TodoApp.js` - Context API and useReducer
2. `CustomHooksDemo.js` - Custom hooks
3. `PerformanceDemo.js` - Optimization techniques

### Advanced
1. `PostsList.js` - Redux Saga
2. `PortalDemo.js` - Advanced React patterns
3. Testing files - Testing strategies

## 🚀 Running Examples

Each component can be imported and used in `App.js` to see it in action:

```javascript
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';
import { TodoProvider } from './TodoContext';

function App() {
  return (
    <TodoProvider>
      <Counter />
      <TodoApp />
    </TodoProvider>
  );
}
```
---

**Happy Learning! 🎉**

This project serves as a practical reference for React development. Each component is designed to be educational and demonstrates real-world React patterns you'll encounter in professional development.
