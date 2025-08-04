
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const ThemeToggler = () => {
  // Consume the context. Here, we expect the context value to be an object
  // containing both the current theme and the toggle function.
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        fontSize: '1em',
        backgroundColor: theme === 'light' ? '#333' : '#eee',
        color: theme === 'light' ? 'white' : 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px'
      }}
    >
      Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
    </button>
  );
};

export default ThemeToggler;