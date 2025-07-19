import './App.css';
import { useState } from 'react'; 

function App() {
  const [inputText, setInputText] = useState("");

  const handleInputText = (event) => {
    setInputText(event.target.value);
  }
  return (
    <div className="App">
      <input type="text" onChange={handleInputText}/>
      <div> {inputText} </div>
    </div>
  );
}

export default App;
