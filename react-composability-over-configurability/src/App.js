import React from 'react';
import logo from './logo.svg';
import './App.css';

import ConfigurationApproach from './components/ConfigurationApproach'
import CompositionApproach from './components/CompositionApproach'

const OPTIONS = [
  { value: 'grapefruit', label: 'Grapefruit' },
  { value: 'lime', label: 'Lime' },
  { value: 'coconut', label: 'Coconut' },
  { value: 'mango', label: 'Mango' },
];

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <ConfigurationApproach options={OPTIONS} />
        <CompositionApproach options={OPTIONS} />
      </React.Fragment>
    </div>
  );
}

export default App;
