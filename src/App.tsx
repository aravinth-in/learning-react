import React from 'react';
import './App.css';
import { Person, Country } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
        name = "Ethereum"
        email = "worldcomputer@eth.com"
        age = {10}
        isMarried = {false}
        friends = {["base", "arbitrum", "zksync"]} 
        country = {Country.India}
      />
    </div>
  );
}

export default App;