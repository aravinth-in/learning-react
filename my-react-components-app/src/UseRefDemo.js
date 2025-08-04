import { useRef, useEffect, useState } from 'react';

const UseRefDemo = () => {
  // 1. Creating a Ref for a DOM element
  const inputRef = useRef(null); // Initialize with null, as the DOM element isn't there yet

  // 2. Creating a Ref to store a mutable value (e.g., a counter that doesn't re-render)
  const renderCountRef = useRef(0); // Initialize with 0
  const [componentRenderCount, setComponentRenderCount] = useState(0); // For comparison with state

  // Use useEffect to focus the input when the component mounts
  useEffect(() => {
    // Check if inputRef.current actually points to a DOM element
    if (inputRef.current) {
      inputRef.current.focus(); // Imperatively focus the input field
      console.log('Input field focused on mount!');
    }
  }, []); // Empty dependency array: runs only once after initial render

  // Use a separate useEffect to track component renders
  useEffect(() => {
    // Increment the ref's current value
    renderCountRef.current = renderCountRef.current + 1;
    console.log(`Component rendered. Ref render count: ${renderCountRef.current}`);
    // Note: Changing renderCountRef.current does NOT trigger a re-render.
    // If you want to see the count update in the UI, you need state.
  }); // No dependency array: runs after every render

  const handleFocusClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input again on button click
      inputRef.current.style.backgroundColor = '#e6ffe6'; // Imperatively change style
      inputRef.current.value = 'Focused!'; // Imperatively change value
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px', backgroundColor: '#e6f7ff', textAlign: 'center' }}>
      <h2>`useRef` Hook Demo</h2>

      {/* Example 1: Accessing a DOM element */}
      <div style={{ marginBottom: '20px' }}>
        <h3>DOM Element Access with `ref`</h3>
        <label htmlFor="myInput">Focus this Input:</label>
        <input
          id="myInput"
          type="text"
          ref={inputRef} /* Attach the ref to the input element */
          placeholder="I will be focused on load!"
          style={{ padding: '8px', margin: '0 10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button
          onClick={handleFocusClick}
          style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Focus Input & Change
        </button>
        <p style={{ fontSize: '0.9em', color: '#666', marginTop: '10px' }}>
          *Input will be focused on initial load. Click button to re-focus and change style/value.
        </p>
      </div>

      {/* Example 2: Storing a mutable value that doesn't trigger re-renders */}
      <div>
        <h3>Storing Mutable Values with `useRef`</h3>
        <p>
          Ref's internal render count: **{renderCountRef.current}** (This value updates, but *doesn't* cause a re-render when only the ref changes.)
        </p>
        <p>
          Component's state render count: **{componentRenderCount}** (This value *does* cause a re-render when updated.)
        </p>
        <button
          onClick={() => setComponentRenderCount(prev => prev + 1)}
          style={{ padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Increment State Render Count
        </button>
        <p style={{ fontSize: '0.9em', color: '#666', marginTop: '10px' }}>
          Watch the console for ref updates. Ref count updates internally, state count updates and re-renders the UI.
        </p>
      </div>
    </div>
  );
};

export default UseRefDemo;