import React from 'react';

// 1. Create the Context
// The default value 'light' is used if a component tries to consume
// ThemeContext without a Provider above it in the tree.
const ThemeContext = React.createContext('light');

export default ThemeContext;