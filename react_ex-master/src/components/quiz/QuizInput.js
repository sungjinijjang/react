import React, {useState} from 'react'

const QuizInput = ({fn}) => {

    const jquery = window.$

    const [text, setText] = useState('')

    const hanleChange = (e) => {
        setText(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = () => {
        console.log("click")

        console.log(jquery("#uInput"))

        fn(text)
        setText('')
    }

    return (
        <div>
            <input id="uInput" type='text' onChange= {hanleChange}  value = {text} ></input>
            <button onClick= {handleClick}>확인</button>
        </div>
    )
}
export default QuizInput