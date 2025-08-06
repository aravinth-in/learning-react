import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Import our main App component
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

// Get the root DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Create a React root for concurrent mode (React 18+)
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);