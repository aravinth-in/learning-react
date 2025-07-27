import React, { useState, useEffect } from 'react';

const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  // useEffect Hook: This is where we handle side effects in functional components.
  // In this case, our side effect is setting up and clearing a timer.
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup function: This runs when the component unmounts or before the effect re-runs.
    // It's crucial for preventing memory leaks when using timers, subscriptions, etc.
    return () => {
      clearInterval(timerId); // Clear the interval when the component is removed from the DOM
    };
  }, []); // The empty dependency array `[]` means this effect runs only once after the initial render

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      backgroundColor: '#ebf5ff'
    }}>
      <h2>Live Clock</h2>
      <p style={{ fontSize: '3.5em', fontWeight: 'bold', color: '#007bff', margin: '10px 0' }}>
        {currentTime}
      </p>
      <p style={{ fontSize: '1.2em', color: '#555' }}>
        Current Date: {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
    </div>
  );
};

export default LiveClock;