import React from 'react';
import logo from './logo.svg';
import './App.css';
import STodoWrapper from './components/STodoWrapper';
import MapComponent from './mapcomp/MapComponent';
import MapWrapper from './mapcomp/MapWrapper';


function App() {

  return (
    <div className="App">
      <MapWrapper></MapWrapper>
      <STodoWrapper></STodoWrapper>
      
    </div>
  );
}

export default App;
