import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// Configure the store
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add our slice's reducer here
  },
});