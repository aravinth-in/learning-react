import React, { useState } from 'react';
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
import EffectCounter from './components/EffectCounter';
import TimerWithCleanup from './components/TimerWithCleanup';

const App = () => {
  const appTitle = "React useEffect Hook Demo";
  const [showTimer, setShowTimer] = useState(true); // State to show/hide TimerWithCleanup

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

      <EffectCounter />

      {/* Conditionally render the TimerWithCleanup to demonstrate unmount cleanup */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button
          onClick={() => setShowTimer(!showTimer)}
          style={{ padding: '10px 20px', fontSize: '1em', backgroundColor: '#9c27b0', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          {showTimer ? 'Hide Timer Component' : 'Show Timer Component'}
        </button>
      </div>
      {showTimer && <TimerWithCleanup />}

      {/* Buttons demonstrating different ways to pass click handlers */}
      <Button text="Say Hello from App" onClick={() => appButtonClickHandler("Hello!")} />
      <Button text="Say Goodbye from App" onClick={() => appButtonClickHandler("Goodbye!")} />
    </>
  );
};

export default App;