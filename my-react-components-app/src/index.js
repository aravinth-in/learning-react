import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Import our main App component
import { store } from './app/store';
import { Provider } from 'react-redux';

// Get the root DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Create a React root for concurrent mode (React 18+)
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);