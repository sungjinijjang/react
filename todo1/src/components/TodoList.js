import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, oper}) => {

    //todos filter로 안에 내용 바꾸기
    const filter = () => {

        //oper가 null이면
        if(!oper.type){
            return todos
        }

        if(oper.type === 'd'){
            return todos.filter(t => t.done === true)
        }

        if(oper.type === 'y'){
            return todos.filter(t => t.done === false)
        }
        return todos
    }

    //li태그 만드는 작업
    // filter 호출한 결과만 매핑해서 보여줌
    const list = filter().map( t => <li key={t.tno}>
        <Todo todo={t} oper={oper}></Todo></li>)

    return (
        <ul className='todoList'>
            {list}
        </ul>
    )
}

export default TodoList