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
import ThemeContext from './ThemeContext';
import ThemeToggler from './components/ThemeToggler';
import NestedComponent from './components/NestedComponent';
import ThemedBox from './components/ThemedBox';
import UseRefDemo from './UseRefDemo';
import ReducerCounter from './ReducerCounter';
import UserFormReducer from './UserFormReducer';
import PerformanceDemo from './PerformanceDemo';
import CustomHooksDemo from './CustomHooksDemo';
import TodoApp from './components/TodoApp';
import { TodoProvider } from './TodoContext';

const App = () => {
  const appTitle = "React `useContext` + `useReducer` Demo";

  return (
    <TodoProvider> {/* Wrap the app with the Provider */}
      <Header title={appTitle} />
      <TodoApp />
    </TodoProvider>
  );
};

export default App;