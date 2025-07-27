import React from 'react';

// Import our custom components
import { Greeting } from './Greeting';
import { Header } from './Header';

/**
 * Main application component.
 * This component acts as the root of our UI tree and renders other components.
 */
function App() {
  const appTitle = "My Awesome React App";
  const currentUser = "Aave";

  return (
    // React components must return a single root element.
    // We use a React Fragment (<></>) here to avoid adding an extra div to the DOM.
    <>
      {/*
        Using our custom Header component.
        We pass a 'title' prop to it.
        Props are how components communicate data from parent to child.
      */}
      <Header title={appTitle} />

      {/*
        Using our custom Greeting component.
        We pass a 'name' prop to it.
      */}
      <Greeting name={currentUser} />

      {/* Another instance of the Greeting component, demonstrating reusability */}
      <Greeting name="Base" />

      <footer>
        <p>This is the footer of the application.</p>
        <p>&copy; {new Date().getFullYear()} My React App</p>
      </footer>
    </>
  );
}

// Export the App component so it can be used in other files (like index.js)
export default App;