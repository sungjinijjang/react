import React from 'react'


const Todo = ({todo, oper}) => {

    // style 주기 => 자바스크립트 객체 -> style 주기
    const styleDone = {
        //backgroundColor: "red"  //카멜표기법 사용
        textDecoration: 'line-through'
    }

    const styleYet = {
        textDecoration: 'underline'
    }

    const handleChange = () => {
        console.log("ehlehlehlehlehle")
        oper.updateDone(todo.tno)
    }

    //삭제 버튼
    //filter 기능 사용
    const handleClick = () => {
        console.log("삭제")
        oper.deleteTodo(todo.tno)
    }

    return(
        <div>
            <input type='checkbox' onChange={handleChange}></input>
            <span style={todo.done? styleDone: styleYet}>{todo.title}</span>
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}

export default Todo