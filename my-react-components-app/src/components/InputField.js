import { useState } from 'react';

const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  // Event handler for input field changes (on every keystroke)
  // 'event' is the SyntheticEvent object
  const handleChange = (event) => {
    // event.target refers to the DOM element that triggered the event (the input field)
    setInputValue(event.target.value);
    console.log("Input value changing:", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default browser form submission behavior (page reload)
    setSubmittedValue(inputValue)
    setInputValue('');
    console.log("Form submitted with value:", inputValue);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#e6f7ff'
    }}>
      <h2>Input & Form Handling</h2>
      <form onSubmit={handleSubmit}> {/* Attach onSubmit handler to the form */}
        <label htmlFor="nameInput">Enter your name:</label>
        <input
          id="nameInput"
          type="text"
          value={inputValue} // The input value is controlled by React state
          onChange={handleChange} // Attach onChange handler
          style={{
            padding: '8px',
            margin: '0 10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
          placeholder="Type here..."
        />

        <button type="submit" style={{
          padding: '8px 15px',
          fontSize: '1em',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}>
          Submit
        </button>
      </form>
      {submittedValue && ( // Only display if submittedValue is not empty
        <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
          Submitted Name: {submittedValue}
        </p>
      )}
      <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
        Current input value (live): {inputValue}
      </p>
    </div>
  );
};

export default InputField;