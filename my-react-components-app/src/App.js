import React, { useState } from 'react';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Button from './components/Button';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import InputField from './components/InputField';
import RandomNumberDisplay from './components/RandomNumberDisplay';
import LiveClock from './components/LiveClock';
import LoginControl from './components/LoginControl'
import LoadingSpinner from './components/LoadingSpinner'
import ListDisplay from './components/ListDisplay'
import RegistrationForm from './components/RegistrationForm'
import FragmentExample from './components/Table'
import PortalDemo from './components/PortalDemo';
import InlineStyleDemo from './components/InlineStyleDemo';
import GlobalStyleDemo from './components/GlobalStyleDemo';
import CssModuleDemo from './components/CssModuleDemo';
import StyledComponentsDemo from './components/StyledComponentsDemo';
import EffectCounter from './components/EffectCounter';
import TimerWithCleanup from './components/TimerWithCleanup';
import ThemeContext from './ThemeContext';
import ThemeToggler from './components/ThemeToggler';
import NestedComponent from './components/NestedComponent';
import ThemedBox from './components/ThemedBox';

const App = () => {
  const appTitle = "React Context API Demo";
  const [theme, setTheme] = useState('light'); // State to manage the current theme

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // The value provided to the context. It's an object containing both theme and toggleTheme function.
  const contextValue = { theme, toggleTheme };

  return (
    // Provide the Context
    // All components inside this Provider can access the 'theme' and 'toggleTheme'
    <ThemeContext.Provider value={contextValue}>
      <Header title={appTitle} />
      <div style={{
        backgroundColor: theme === 'light' ? '#fff' : '#222', // App background changes with theme
        color: theme === 'light' ? '#333' : '#eee',
        minHeight: '100vh',
        padding: '20px',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        <h1>Application Root</h1>
        <p>This is the main application. It sets the theme context.</p>

        <ThemeToggler /> {/* This component consumes context to toggle theme */}
        <NestedComponent /> {/* This component's child consumes context */}

        <div style={{ marginTop: '30px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
          <h3>Another Section</h3>
          <p>This section is also affected by the global theme.</p>
          <ThemedBox />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;