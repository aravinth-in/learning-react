import { useState, useEffect } from 'react';

// Custom Hook: useWindowSize
// Returns an object with the current window width and height
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Cleanup function: remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures that effect runs only on mount and cleanup on unmount

  return windowSize;
};

export default useWindowSize;