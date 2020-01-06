import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import HelloBox from './components/HelloBox';
import QuizComponent from './components/quiz/QuizComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuizComponent></QuizComponent>
        {/* <Hello></Hello>
        <Hello2></Hello2>
        <HelloBox></HelloBox> */}
      </header>
    </div>
  );
}

export default App;
