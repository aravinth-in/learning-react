import { useReducer } from 'react';

// 1. Define the Reducer Function for the form
const formReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE':
      // Update a specific field based on action.field (name attribute)
      // and action.value (input value)
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET_FORM':
      // Reset all fields to their initial empty values
      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// 2. Define the Initial State for the form
const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
};

const UserFormReducer = () => {
  // 3. Use the useReducer Hook
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  // A generic change handler for all form inputs
  const handleChange = (event) => {
    dispatch({
      type: 'HANDLE_INPUT_CHANGE',
      field: event.target.name, // The 'name' attribute of the input
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted (useReducer):', formState);
    alert(`User Registered:\nFirst Name: ${formState.firstName}\nLast Name: ${formState.lastName}\nEmail: ${formState.email}`);
    dispatch({ type: 'RESET_FORM' }); // Dispatch action to reset form
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px', backgroundColor: '#e3f2fd', maxWidth: '500px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h2>`useReducer` Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px' }}>First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName" // Important: matches the 'field' in action
            value={formState.firstName}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px' }}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName" // Important: matches the 'field' in action
            value={formState.lastName}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email" // Important: matches the 'field' in action
            value={formState.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: '10px 15px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}
        >
          Submit
        </button>
        <button
          type="button" // Use type="button" to prevent accidental submission
          onClick={() => dispatch({ type: 'RESET_FORM' })}
          style={{ padding: '10px 15px', backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>
        Current State: {JSON.stringify(formState)}
      </p>
    </div>
  );
};

export default UserFormReducer;