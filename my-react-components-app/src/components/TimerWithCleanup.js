import { useState, useEffect } from 'react';

const TimerWithCleanup = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  // useEffect for the timer
  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      console.log('Timer started!');
    } else {
      console.log('Timer paused/stopped.');
    }

    // Cleanup function: Runs when component unmounts OR before the effect re-runs
    return () => {
      console.log('Cleaning up timer (clearInterval)...');
      clearInterval(intervalId); // Crucial: clear the interval to prevent memory leaks
    };
  }, [isActive]); // Dependency: re-run effect only when 'isActive' changes

  const toggleTimer = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  const resetTimer = () => {
    setIsActive(false); // Stop the timer first
    setSeconds(0);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px', backgroundColor: '#fffde7', textAlign: 'center' }}>
      <h2>Timer with `useEffect` Cleanup</h2>
      <p style={{ fontSize: '3em', margin: '10px 0' }}>{seconds}s</p>
      <button onClick={toggleTimer} style={{ margin: '5px', padding: '8px 15px', backgroundColor: isActive ? '#f44336' : '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer} style={{ margin: '5px', padding: '8px 15px', backgroundColor: '#607d8b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Reset
      </button>
      <p style={{ fontSize: '0.9em', color: '#777', marginTop: '10px' }}>
        Open your browser console to see "Timer started!" and "Cleaning up timer..." messages.
        Try toggling the timer multiple times.
      </p>
    </div>
  );
};

export default TimerWithCleanup;