import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import FormBlock from './FormBlock'

const App = () => {
  return (
    <div className="App">
      <Header />
      <FormBlock />
    </div>
  );
}

export default App;
