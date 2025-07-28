import React from 'react';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Button from './components/Button';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import InputField from './components/InputField';
import RandomNumberDisplay from './components/RandomNumberDisplay';
import LiveClock from './components/LiveClock';
import LoginControl from './components/LoginControl'
import LoadingSpinner from './components/LoadingSpinner'
import ListDisplay from './components/ListDisplay'
import RegistrationForm from './components/RegistrationForm'
import FragmentExample from './components/Table'
import PortalDemo from './components/PortalDemo';
import InlineStyleDemo from './components/InlineStyleDemo';
import GlobalStyleDemo from './components/GlobalStyleDemo';
import CssModuleDemo from './components/CssModuleDemo';
import StyledComponentsDemo from './components/StyledComponentsDemo';

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
      <LoginControl />
      <LoadingSpinner />
      <ListDisplay />
      <RegistrationForm />
      <FragmentExample />
      <PortalDemo />
      <InlineStyleDemo />
      <GlobalStyleDemo />
      <CssModuleDemo />
      <StyledComponentsDemo />

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