import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {
  const [fact, setFact] = useState("");

  // This will constantly render our UI with new facts as the fact is changing
  Axios("https://catfact.ninja/fact")
  .then((res) => {
    setFact(res.data.fact);
  })

  return (
    <div className="App">
      <button> Generate Cat Fact</button>
      <p> {fact} </p>
    </div>
  );
}

export default App;
