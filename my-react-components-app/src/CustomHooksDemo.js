import useToggle from './hooks/useToggle';
import useWindowSize from './hooks/useWindowSize';

const CustomHooksDemo = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [isDarkMode, toggleDarkMode] = useToggle(true);

  const { width, height } = useWindowSize();

  const sectionStyle = {
    padding: '20px',
    margin: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
    color: isDarkMode ? 'white' : '#333',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };

  const buttonStyle = {
    padding: '10px 18px',
    fontSize: '1em',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px'
  };

  return (
    <div style={sectionStyle}>
      <h2>Custom Hooks Demo</h2>

      {/* Demo useToggle */}
      <div>
        <h3>Toggle Functionality (`useToggle`)</h3>
        <p>Modal Status: {isModalOpen ? 'Open' : 'Closed'}</p>
        <button
          onClick={toggleModal}
          style={{ ...buttonStyle, backgroundColor: isModalOpen ? '#dc3545' : '#17a2b8', color: 'white' }}
        >
          {isModalOpen ? 'Close Modal' : 'Open Modal'}
        </button>

        <p>Dark Mode: {isDarkMode ? 'Enabled' : 'Disabled'}</p>
        <button
          onClick={toggleDarkMode}
          style={{ ...buttonStyle, backgroundColor: isDarkMode ? '#6c757d' : '#28a745', color: 'white' }}
        >
          Toggle Dark Mode
        </button>

        {isModalOpen && (
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '30px', borderRadius: '10px', zIndex: 1000 }}>
            <h3>I'm a Simple Modal!</h3>
            <p>Controlled by `useToggle` hook.</p>
            <button onClick={toggleModal} style={{ ...buttonStyle, backgroundColor: '#f0f0f0', color: '#333' }}>
              Close
            </button>
          </div>
        )}
      </div>

      <hr style={{ margin: '30px auto', width: '80%' }} />

      {/* Demo useWindowSize */}
      <div>
        <h3>Window Size Tracking (`useWindowSize`)</h3>
        <p>Window Width: <strong>{width !== undefined ? `${width}px` : 'N/A'}</strong></p>
        <p>Window Height: <strong>{height !== undefined ? `${height}px` : 'N/A'}</strong></p>
        <p style={{ fontSize: '0.9em', color: '#888' }}>
          (Try resizing your browser window!)
        </p>
      </div>
    </div>
  );
};

export default CustomHooksDemo;