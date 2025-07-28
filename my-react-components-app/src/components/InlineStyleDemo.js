const InlineStyleDemo = () => {
  const containerStyle = {
    backgroundColor: '#e0f7fa',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    color: '#007bff',
    textAlign: 'center',
    marginBottom: '15px'
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
    border: '1px solid #007bff',
    padding: '10px',
    borderRadius: '5px'
  };

  const buttonStyle = {
    backgroundColor: 'darkblue',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px'
};

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Inline Style Demo</h2>
      <p style={paragraphStyle}>
        This paragraph is styled using inline JavaScript objects.
        Notice the `camelCase` for CSS properties like `backgroundColor`.
      </p>
      <button
        style={buttonStyle}
      >
        Click Me
      </button>
    </div>
  );
};

export default InlineStyleDemo;