import React, { Component } from 'react';
import './App.css';
import PhoneDashboard from './components/PhoneDashboard';
import Clicker from './components/Clicker';

function App(props) {
  return (
    <>
      <Clicker />
      <PhoneDashboard />
    </>
  );
}

export default App;
