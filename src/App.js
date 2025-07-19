import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [fact, setFact] = useState("");

  const fetchFact = () => {
    Axios("https://catfact.ninja/fact")
    .then((res) => {
      setFact(res.data.fact);
    });
  }

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchFact}> Generate Cat Fact</button>
      <p> {fact} </p>
    </div>
  );
}

export default App;
