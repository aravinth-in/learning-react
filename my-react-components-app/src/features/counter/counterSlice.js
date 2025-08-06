import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

// Create the slice
export const counterSlice = createSlice({
  name: 'counter', // The name of our slice
  initialState,
  reducers: {
    // Reducer functions automatically become action creators.
    // RTK uses Immer, so we can "mutate" state directly here.
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export the action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer to be added to the store
export default counterSlice.reducer;