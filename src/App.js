import './App.css';

function App() {
  const ecosystem_projects = ["Aave", "Uniswap", "Lido", "ENS"];
  return (
    <div className="App">
    {ecosystem_projects.map((project, key) => {
      return <h2 key={key}> {project} </h2>;
    })}
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
