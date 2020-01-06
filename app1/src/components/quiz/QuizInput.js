import React, {useState} from 'react'

const QuizInput = ({fn}) => {
    
    const jquery = window.$

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = () => {
        console.log("click")

        console.log(jquery("#uInput"))
        fn(text)
        //정답 맞추면 텍스트 지워짐
        setText('')

    }

    return(
        <div>
            <input id="uInput" type="text" onChange={handleChange} value={text} ></input>
            <button onClick= {handleClick}>확인</button>
        </div>
    )
}


export default QuizInput