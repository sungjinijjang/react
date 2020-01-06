import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloBox from './components/HelloBox';
import CountBoard from './components/day1/CountBoard';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/day1/CountHookComponent';
import QuizComponent from './components/quiz/QuizComponent';
import ExInput from './components/refs/ExInput';
import ExInputHook from './components/refs/ExInputHook';
import LoopEx from './components/day3/LoopEx';
import ItemComponent from './components/day3/ItemComponent';

function App() {

  const arr1 = [  
    {title:"Quiz1...", answer:"1" },
    {title:"Quiz2...", answer:"2" },
    {title:"Quiz3...", answer:"3" },
    {title:"Quiz4...", answer:"4" },
    {title:"Quiz5...", answer:"5" }, 
 ]

 const arr2 = [  
  {title:"ZZQuiz1...", answer:"1" },
  {title:"ZZQuiz2...", answer:"2" },
  {title:"ZZQuiz3...", answer:"3" },
  {title:"ZZQuiz4...", answer:"4" },
  {title:"ZZQuiz5...", answer:"5" }, 
]


  return (
    <div className="App">
      <header className="App-header">
        <ItemComponent></ItemComponent>

        <LoopEx></LoopEx>

        <ExInput></ExInput>
        <ExInput></ExInput>

        <QuizComponent arr={arr1}></QuizComponent>

        
        <CountHookComponent></CountHookComponent>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
