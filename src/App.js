import './App.css';
import {Project} from './Project.js'

function App() {
  let count = 0;

  // This will increase the count, but not in UI as react render this count only once.
  // refer count_increment_not_updated_ui.png
  const increaseCount = () => {
    count++;
    console.log(count);
  }
  return (
    <div className="App">
      {count} <button onClick={increaseCount}> Increase Count</button>
    </div>
  );
}

export default App;
