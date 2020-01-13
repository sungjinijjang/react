import React, {useState, useRef} from 'react'

const TodoInput = ({addTodo}) => {

    const inputRef = useRef()

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = (e) => {
        console.log("Click")
        addTodo(text)
        setText('')
        // ref로 돔을 참조하는 것 -> current
        inputRef.current.focus()
    }

    return(
        <div>
            <input type='text' value={text} onChange={handleChange} ref={inputRef}></input>
            <button onClick={handleClick}>SAVE</button>
        </div>
    )
}

export default TodoInput