import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const ThemedBox = () => {
  // Consume the context. Here, we only need the 'theme' value.
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#333' : '#f0f0f0',
    padding: '20px',
    margin: '15px',
    borderRadius: '8px',
    border: `1px solid ${theme === 'light' ? '#ccc' : '#555'}`,
    textAlign: 'center'
  };

  return (
    <div style={boxStyle}>
      <h3>Themed Box</h3>
      <p>Current theme: <strong>{theme}</strong></p>
      <p>This box's colors change based on the theme context.</p>
    </div>
  );
};

export default ThemedBox;