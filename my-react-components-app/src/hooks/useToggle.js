import { useState, useCallback } from 'react';

// Custom Hook: useToggle
// Takes an initial value (optional, defaults to false)
// Returns the current value and a toggle function
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  // useCallback is used here to memoize the toggle function.
  // This ensures that the toggle function's reference doesn't change
  // on every render, which can be useful if it's passed down to
  // memoized child components.
  const toggle = useCallback(() => {
    setValue(prevValue => !prevValue);
  }, []); // Empty dependency array means this function reference is stable

  return [value, toggle]; // Return current value and the toggle function
};

export default useToggle;