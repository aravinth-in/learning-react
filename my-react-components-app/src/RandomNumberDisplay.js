import { useState } from 'react';

const RandomNumberDisplay = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNumber);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      backgroundColor: '#e6ffed'
    }}>
      <h2>Random Number Generator</h2>
      <p style={{ fontSize: '3em', margin: '10px 0', color: '#333' }}>
        {randomNumber === 0 ? 'Click to Generate!' : randomNumber}
      </p>
      <button
        onClick={generateRandomNumber}
        style={{
          padding: '10px 20px',
          fontSize: '1em',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Generate New Number
      </button>
    </div>
  );
};

export default RandomNumberDisplay;