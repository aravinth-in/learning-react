import React, { useState } from 'react'; // Import useState hook

const Counter = () => {
  // Declare a state variable 'count' and its setter function 'setCount'
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
    console.log("Incremented count to:", count + 1); // Note: console.log might show old value due to async updates
  };

  // Event handler for decrementing the count
  const handleDecrement = () => {
    // You can also use a functional update if the new state depends on the previous state
    // setCount(prevCount => prevCount - 1); // More reliable for complex updates
    setCount(count - 1);
    console.log("Decremented count to:", count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

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