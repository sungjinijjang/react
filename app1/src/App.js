import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import HelloBox from './components/HelloBox';
import QuizComponent from './components/quiz/QuizComponent';




function App() {

      //퀴즈 데이터(퀴즈와 정답-상태유지? 변수선언 유지?)
    // index -> state로 유지
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
        <QuizComponent arr={arr1}></QuizComponent>
        
        {/* <Hello></Hello>
        <Hello2></Hello2>
        <HelloBox></HelloBox> */}
      </header>
    </div>
  );
}

export default App;
