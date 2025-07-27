import React from 'react';
import Greeting from './Greeting';
import Header from './Header';
import Button from './Button';
import Counter from './Counter';

const App = () => {
  const appTitle = "My Interactive React App";
  const developerName = "React Master";
  const company = "Awesome Devs";

  const buttonClickHandler = () => {
    alert("Button was clicked from App.js!");
  };

  return (
    <>
      <Header title={appTitle} />

      <Greeting name="Alice" message="Hope you have a great day!" />
      <Greeting name="Bob" message="Welcome aboard!" />

      <Counter />
      <Counter /> {/* You can add multiple instances, and each will have its own independent state! */}

      <Button text="Click Me!" onClick={buttonClickHandler} />
      <Button text="Learn More" onClick={() => alert("More info coming soon!")} />

      <footer>
        <p>&copy; {new Date().getFullYear()} {company}</p>
      </footer>
    </>
  );
};

export default App;