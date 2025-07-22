import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
        name = "Ethereum" // Name accept a number as it is type safety
        email = "worldcomputer@eth.com"
        age = {10}
        isMarried = {false}
        // Change to string, it break as string don't have map function.
        // Change to friends = null, it break the page
        friends = {["base", "arbitrum", "zksync"]} 
      />
    </div>
  );
}

export default App;
