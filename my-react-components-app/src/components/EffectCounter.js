import { useState, useEffect } from 'react';

const EffectCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Aave');

  // 1. useEffect with NO dependency array
  // Runs after EVERY render (initial and all updates)
  useEffect(() => {
    console.log(`[Effect 1 - No Dependency] Component rendered. Current Count: ${count}`);
    // Be cautious: If you update state here without conditions, it can cause infinite loops.
  });

  // 2. useEffect with an EMPTY dependency array `[]`
  // Runs ONLY ONCE after the initial render (like componentDidMount)
  useEffect(() => {
    console.log('[Effect 2 - Empty Dependency] Component mounted (ran only once!).');
    // Example: Fetch initial data, set up global event listeners.
    // fetch('/api/data').then(res => res.json()).then(data => /* ... */);
  }, []); // Empty array means no dependencies, so it runs once

  // 3. useEffect with a dependency array `[count]`
  // Runs after initial render AND whenever 'count' changes
  useEffect(() => {
    console.log(`[Effect 3 - Count Dependency] Count changed to: ${count}`);
    document.title = `Count: ${count}`; // Side effect: update document title
  }, [count]); // This effect re-runs only when 'count' state changes

  // 4. useEffect with multiple dependencies `[count, name]`
  // Runs after initial render AND whenever 'count' OR 'name' changes
  useEffect(() => {
    console.log(`[Effect 4 - Multiple Dependencies] Count or Name changed. Count: ${count}, Name: ${name}`);
  }, [count, name]); // This effect re-runs when either 'count' or 'name' changes


  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px', backgroundColor: '#e0f2f7', textAlign: 'center' }}>
      <h2>`useEffect` Basic Demo</h2>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)} style={{ margin: '5px', padding: '8px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Increment Count
      </button>
      <button onClick={() => setName(name === 'Aave' ? 'Base' : 'Aave')} style={{ margin: '5px', padding: '8px 15px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Change Name
      </button>
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '8px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Reset Count
      </button>
    </div>
  );
};

export default EffectCounter;