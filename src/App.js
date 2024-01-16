import React, { Component, useState } from 'react';
import './App.css';
import PhoneDashboard from './components/PhoneDashboard';
import Clicker from './components/Clicker';

function App(props) {

  const [clickerVisible, setClickerVisible] = useState(true);

  return (
    <>
      <button onClick={() => setClickerVisible(!clickerVisible)}>Toggle clicker</button>
      {clickerVisible && <Clicker />}
      <PhoneDashboard />
    </>
  );
}

export default App;
