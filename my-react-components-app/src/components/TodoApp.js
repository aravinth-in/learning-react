import { useState } from 'react';
import { useTodoState, useTodoDispatch } from '../TodoContext';

const TodoItem = ({ todo }) => {
  {/* Each component that needs the dispatcher should call useTodoDispatch() inside its own function body.
   If you call it outside (at the top level of the file), React will throw an error */}

  // When you call useTodoDispatch() in different components (like TodoItem and AddTodoForm), each call retrieves the same 
  // dispatch function provided by your TodoProvider.
  const dispatch = useTodoDispatch();

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #eee',
        backgroundColor: todo.isCompleted ? '#f0f8ff' : '#fff',
      }}
    >
      <span
        style={{
          textDecoration: todo.isCompleted ? 'line-through' : 'none',
          color: todo.isCompleted ? '#999' : '#333',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })} // here payload contains id while dispatch
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
        style={{
          padding: '5px 10px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </li>
  );
};

const TodoList = () => {
  const todos = useTodoState();

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>No todos yet!</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useTodoDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: text }); // here payload contains text while dispatch
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
        style={{ flex: 1, padding: '10px', fontSize: '1em', borderRadius: '4px', border: '1px solid #ddd' }}
      />
      <button
        type="submit"
        style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' }}
      >
        Add Todo
      </button>
    </form>
  );
};

const TodoApp = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Global To-Do App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;