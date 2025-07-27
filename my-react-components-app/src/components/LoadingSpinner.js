import { useState } from 'react';

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => {
    setIsLoading(prev => !prev);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#fff0f5',
      textAlign: 'center'
    }}>

      <button onClick={toggleLoading} style={{ backgroundColor: '#ffc107', color: 'black', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginBottom: '15px' }}>
        {isLoading ? 'Stop Loading' : 'Start Loading'}
      </button>

      {isLoading && (
        <div style={{ fontSize: '2em', color: '#ff6347' }}>
          <span role="img" aria-label="loading spinner">🔄</span> Loading data...
        </div>
      )}

      {!isLoading && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>Data Loaded Successfully!</p>
      )}
    </div>
  );
};

export default LoadingSpinner;