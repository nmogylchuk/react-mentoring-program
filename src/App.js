import React from 'react';
import CreateElementComponent from './components/CreateElementComponent';
import Component from './components/Component';
import FunctionalComponent from './components/FunctionalComponent';
import PureComponent from './components/PureComponent';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Hello React</h1>
      <CreateElementComponent />
      <Component />
      <PureComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
