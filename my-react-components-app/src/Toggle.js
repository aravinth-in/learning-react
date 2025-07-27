import { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevIsOn => !prevIsOn);
    console.log("Toggle is now:", !isOn ? "ON" : "OFF");
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      backgroundColor: '#fffbe6'
    }}>
      <h2>Toggle Switch</h2>
      <p style={{ fontSize: '2em', fontWeight: 'bold' }}>Status: {isOn ? 'ON' : 'OFF'}</p>
      <button
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          margin: '10px',
          fontSize: '1em',
          cursor: 'pointer',
          backgroundColor: isOn ? '#dc3545' : '#28a745', // Red if ON, Green if OFF
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {isOn ? 'Turn OFF' : 'Turn ON'} {/* Button text changes with state */}
      </button>
    </div>
  );
};

export default Toggle;