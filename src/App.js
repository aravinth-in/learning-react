import './App.css';

function App() {
  const price = 4000;
  const isSentimentBullish = true;
  return (
    <div className="App">
      {price >= 100 ? <h1> more than 4 digits </h1> : <h1> under 4 digits</h1>}
      <h2 style={{color: isSentimentBullish ? "green" : "red"}}> Market Sentiment</h2>

      {isSentimentBullish && <button> Buy </button>}
      {!isSentimentBullish && <button> Sell </button>}
    </div>
  );
}

// Components
const Ethereum = (props) => {
  return (
    // jsx
    <div>
      <h1> {props.name} </h1> 
      <h2> {props.description} </h2>
      <h3> {props.age} </h3>
    </div>
  );
}

export default App;
