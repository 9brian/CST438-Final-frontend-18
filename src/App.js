import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';

const App = () => {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  )
}

export default App;
