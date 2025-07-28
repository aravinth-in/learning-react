import { useState } from 'react';

const RegistrationForm = () => {
  // State to manage all form fields as a single object
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    subscribe: false, // For checkbox
    gender: '',
    country: '',
    bio: ''
  });

  const [submissionMessage, setSubmissionMessage] = useState('');

  // Universal change handler for most input types (text, password, email, textarea, select)
  // It uses the 'name' attribute of the input to update the corresponding state property.
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Use computed property names ([name]) to update the correct field in formData
    // For checkboxes, use 'checked' property instead of 'value'
    setFormData(prevFormData => ({
      ...prevFormData, // Keep all other form data properties as they are
      [name]: type === 'checkbox' ? checked : value // Update the specific field
    }));

    // Clear submission message on input change
    setSubmissionMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default browser form submission (page reload)

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setSubmissionMessage('Please fill in all required fields.');
      return;
    }

    // Simulate sending data to a server
    console.log('Form Submitted Data:', formData);
    setSubmissionMessage('Registration Successful! Check console for data.');

    // Optionally, reset the form after submission
    setFormData({
      username: '',
      email: '',
      password: '',
      subscribe: false,
      gender: '',
      country: '',
      bio: ''
    });
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '25px',
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#fefefe',
      maxWidth: '500px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Username:</label>
          <input
            type="text"
            id="username"
            name="username" // Important for the universal handleChange
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            required
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            required
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            required
          />
        </div>

        {/* Checkbox */}
        <div style={{ marginBottom: '15px' }}>
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            checked={formData.subscribe} // For checkboxes, use 'checked' instead of 'value'
            onChange={handleChange}
            style={{ marginRight: '8px' }}
          />
          <label htmlFor="subscribe">Subscribe to newsletter</label>
        </div>

        {/* Radio Buttons */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Gender:</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'} // Check if this option is selected
            onChange={handleChange}
            style={{ marginRight: '5px' }}
          />
          <label htmlFor="male" style={{ marginRight: '15px' }}>Male</label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
            style={{ marginRight: '5px' }}
          />
          <label htmlFor="female">Female</label>
        </div>

        {/* Select Dropdown */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="country" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Country:</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="india">India</option>
          </select>
        </div>

        {/* Textarea */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="bio" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}
            placeholder="Tell us about yourself..."
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            padding: '12px 20px',
            fontSize: '1em',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Register
        </button>

        {submissionMessage && (
          <p style={{ marginTop: '15px', color: submissionMessage.includes('Successful') ? 'green' : 'red', fontWeight: 'bold' }}>
            {submissionMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;