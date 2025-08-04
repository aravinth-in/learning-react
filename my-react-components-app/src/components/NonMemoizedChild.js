const NonMemoizedChild = ({ value, onClick }) => {
  console.log('NonMemoizedChild: Rendering...'); // Observe this in console

  return (
    <div style={{ border: '1px solid #fec89a', padding: '15px', margin: '10px', borderRadius: '8px', backgroundColor: '#ffe5d9' }}>
      <h4>Non-Memoized Child Component</h4>
      <p>Received Value: <strong>{value}</strong></p>
      <button onClick={onClick} style={{ padding: '8px 15px', backgroundColor: '#e76f51', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Click Child Button
      </button>
      <p style={{ fontSize: '0.8em', color: '#666' }}>
        (Check console to see when I re-render.)
      </p>
    </div>
  );
};

export default NonMemoizedChild;