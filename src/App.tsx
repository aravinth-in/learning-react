import React from 'react';
import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
        name = "Ethereum"
        email = "worldcomputer@eth.com"
        age = {10}
        isMarried = {false}
        friends = {["base", "arbitrum", "zksync"]} 
      />
    </div>
  );
}

export default App;