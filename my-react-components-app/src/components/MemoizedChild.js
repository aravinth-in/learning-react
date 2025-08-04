import React from 'react';

// This component will only re-render if its props (value, onClick) truly change
const MemoizedChild = React.memo(({ value, onClick }) => {
  console.log('MemoizedChild: Rendering...'); // Observe this in console

  return (
    <div style={{ border: '1px solid #a8dadc', padding: '15px', margin: '10px', borderRadius: '8px', backgroundColor: '#edf2f4' }}>
      <h4>Memoized Child Component</h4>
      <p>Received Value: <strong>{value}</strong></p>
      <button onClick={onClick} style={{ padding: '8px 15px', backgroundColor: '#457b9d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Click Child Button
      </button>
      <p style={{ fontSize: '0.8em', color: '#666' }}>
        (Check console to see when I re-render.)
      </p>
    </div>
  );
});

export default MemoizedChild;