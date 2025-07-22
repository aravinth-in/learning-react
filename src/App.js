import './App.css';
import { useToggle } from './useToggle';

function App() {
  // These two toggle are completedly independent of each other .
  const [isVisible, toggle] = useToggle();
  // UseToggle returns [state, toggle] you can set the custom name as you like while using
  // it. for eg. isVisible is the name of the state here.
  // const {state, toggle} = useToggle(); - in this case you can't set the custom name.
  // other way const {state: isVisible, toggle } = useToggle();
  const [isVisible2, toggle2] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}> {isVisible? "Hide" : "Show"} </button>
      {isVisible && <h1> Hidden text </h1>}

      <button onClick={toggle2}> {isVisible2? "Hide" : "Show"} </button>
      {isVisible2 && <h1> Hidden text </h1>}
    </div>
  );
}

export default App;
