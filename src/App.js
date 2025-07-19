import './App.css';
import { useState } from 'react'; 

function App() {
  const [count, setCount] = useState(0); // Initial count value set to 0

  const increaseCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      {count} <button onClick={increaseCount}> Increase Count</button>
    </div>
  );
}

export default App;
