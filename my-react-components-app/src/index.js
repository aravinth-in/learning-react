// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Import our main App component

// Get the root DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Create a React root for concurrent mode (React 18+)
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/*
      <React.StrictMode> is a tool for highlighting potential problems in an application.
      It activates additional checks and warnings for its descendants.
      It does NOT render any visible UI.
    */}
    <App />
  </React.StrictMode>
);