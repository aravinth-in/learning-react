import { useState, useMemo, useCallback } from 'react';
import MemoizedChild from './components/MemoizedChild';
import NonMemoizedChild from './components/NonMemoizedChild';

// A dummy expensive calculation function
const calculateExpensiveValue = (num) => {
  console.log('--- Performing expensive calculation... ---');
  // Simulate a heavy computation
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return num * 2;
};

const PerformanceDemo = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log('Parent Component: Rendering...'); // Observe this in console

  // 1. useMemo for expensive calculation
  // 'expensiveValue' will only be re-calculated when 'count' changes.
  const expensiveValue = useMemo(() => calculateExpensiveValue(count), [count]);

  // 2. useCallback for memoizing functions
  // 'handleClick' function reference will only change if 'count' changes.
  // This is crucial for MemoizedChild to not re-render unnecessarily when 'toggle' changes.
  const handleClick = useCallback(() => {
    console.log(`Button clicked! Current count: ${count}`);
    // setCount(prevCount => prevCount + 1); // Uncomment to see handleClick dependency effect
  }, [count]); // Dependency: 'count'. If 'count' is needed inside the function

  // If handleClick did not depend on 'count', we could use:
  // const staticHandleClick = useCallback(() => {
  //   console.log("Static button clicked!");
  // }, []); // Empty dependency array means this function never changes reference


  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
      <h2>Performance Optimization Demo</h2>

      <h3>Parent Component State</h3>
      <p>Count: {count}</p>
      <p>Toggle: {toggle ? 'ON' : 'OFF'}</p>
      <p>Calculated Expensive Value (Memoized): <strong>{expensiveValue}</strong></p>

      <button
        onClick={() => setCount(prevCount => prevCount + 1)}
        style={{ margin: '5px', padding: '10px 18px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Increment Count (Causes re-calc & re-render)
      </button>
      <button
        onClick={() => setToggle(prevToggle => !prevToggle)}
        style={{ margin: '5px', padding: '10px 18px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Toggle State (Only causes parent re-render)
      </button>

      <hr style={{ margin: '30px 0' }} />

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <MemoizedChild value={expensiveValue} onClick={handleClick} />
        <NonMemoizedChild value={expensiveValue} onClick={handleClick} />
      </div>
    </div>
  );
};

export default PerformanceDemo;