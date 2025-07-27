import React from 'react';
import Greeting from './Greeting';
import Header from './Header';
import Button from './Button';

const App = () => {
  const appTitle = "My Enhanced React App";
  const developerName = "React Master";
  const company = "Awesome Devs";

  const buttonClickHandler = () => {
    alert("Button was clicked!");
  };

  return (
    <>
      <Header title={appTitle} />

      {/* Passing different props to different instances of Greeting */}
      <Greeting name="Alice" message="Hope you have a great day!" />
      <Greeting name="Bob" message="Welcome aboard!" />
      <Greeting name={developerName} message={`Built by ${developerName} at ${company}.`} />

      {/* Passing a function as a prop (event handler) */}
      <Button text="Click Me!" onClick={buttonClickHandler} />
      <Button text="Learn More" onClick={() => alert("More info coming soon!")} />

      <footer>
        <p>&copy; {new Date().getFullYear()} {company}</p>
      </footer>
    </>
  );
};

export default App;