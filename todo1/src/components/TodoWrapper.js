import React, {useState} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoMenu from './TodoMenu'

// 시퀀스 넘버 계속 증가시킬 것
let sequence = 0

const TodoWrapper = () => {

    // 하위 컴포넌트에 전달하는 옵져버 같은 역할?
    // useState를 사용
    //const [todos, setTodos] = useState([{tno: 1, title: 'Study Hard', done: true}])
    const [todos, setTodos] = useState([])
    
    //상태코드 정의
    const [type, setType] = useState('a')

    const changeType = (typeValue) => {
        console.log("type: " + type)
        setType(typeValue)
    }

    //사용자는 title 내용만 던져줌
    const addTodo = (title) => {
        //tno번호따기
        const newTodo = {tno:++sequence, title:title, doen:false}
        setTodos(todos.concat(newTodo))
    }

    const deleteTodo = (tno) => {
        setTodos(todos.filter(t => t.tno !== tno))
    }

    const updateDone = (tno) => {
        console.log("update" + tno)
        // tno 해당하는 것 찾기
        const target = todos.filter(t => t.tno === tno)[0]
        target.done = !target.done 
        //변경된 것을 setTodos 해줘야함
        setTodos(todos)

        // 새 복사본 자바스크립트 만들기
        const newTodos = todos.slice() // 원본 쪼개기
        setTodos(newTodos) // 붙여넣기
    }

    // dto처럼 하나로 묶어서 사용
    const oper = {deleteTodo, updateDone, type}

    return(
        <div>
            <h1>Todo Wrapper Component</h1>
            <TodoMenu changeType={changeType}></TodoMenu>
            <TodoInput addTodo={addTodo}></TodoInput>
            <TodoList todos={todos} oper={oper}></TodoList>
        </div>
    )
}


export default TodoWrapper