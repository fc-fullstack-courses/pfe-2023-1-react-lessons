import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import StopWatch from './components/StopWatch';
import List from './components/List';

function App(props) {
  return (
    <>
      {/* <LoginForm />
      <StopWatch /> */}
      <List listName="Stopwatches">
        <StopWatch />
        <StopWatch />
        <StopWatch />
        <StopWatch />
      </List>
      <List>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </List>
    </>
  );
}

export default App;
