import React, { useState } from 'react'; // Import useState hook

const Counter = () => {
  // Declare a state variable 'count' and its setter function 'setCount'
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(prevCount => prevCount + 1);
  const handleDecrement = () => setCount(prevCount => prevCount - 1);
  const handleReset = () => setCount(0);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>Counter Component</h2>
      <p style={{ fontSize: '3em', margin: '10px 0' }}>{count}</p> {/* Displaying the current state */}
      <button
        onClick={handleIncrement} // Attach event handler to button click
        style={{
          padding: '10px 15px',
          margin: '5px',
          fontSize: '1em',
          cursor: 'pointer',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        style={{
          padding: '10px 15px',
          margin: '5px',
          fontSize: '1em',
          cursor: 'pointer',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Decrement
      </button>
      <button
        onClick={handleReset}
        style={{
          padding: '10px 15px',
          margin: '5px',
          fontSize: '1em',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;