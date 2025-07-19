import './App.css';

function App() {
  return (
    <div className="App">
      <Ethereum name="Ethereum" description="World Ledger" age={10} />
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
