import React from 'react';
import Greeting from './Greeting';
import Header from './Header';
import Button from './Button';
import Counter from './Counter';
import Toggle from './Toggle';
import InputField from './InputField';
import RandomNumberDisplay from './RandomNumberDisplay';
import LiveClock from './LiveClock'; 

const App = () => {
  const appTitle = "React Event Handling Demo";
  const developerName = "React Master";
  const company = "Awesome Devs";

  const appButtonClickHandler = (message) => {
    alert(`Button from App.js clicked: ${message}`);
  };

  return (
    <>
      <Header title={appTitle} />
      <Greeting name="Aave" message="Hope you have a great day!" />
      <Counter />
      <Toggle />
      <InputField />
      <RandomNumberDisplay />
      <LiveClock />

      {/* Buttons demonstrating different ways to pass click handlers */}
      <Button text="Say Hello from App" onClick={() => appButtonClickHandler("Hello!")} />
      <Button text="Say Goodbye from App" onClick={() => appButtonClickHandler("Goodbye!")} />

      <footer>
        <p>&copy; {new Date().getFullYear()} {company}</p>
      </footer>
    </>
  );
};

export default App;