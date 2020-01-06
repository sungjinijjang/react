import React, {useState} from 'react'
import QuizBoard from './QuizBoard'
import QuizInput from './QuizInput'

const QuizComponent = ({arr}) => {

    const [idx, setIdx] = useState(0)
    const [end, setEnd] = useState(0)

    const checkAnswer = (userInput) => {
        console.log("checkAnswer")
        if(arr[idx].answer === userInput){
            if(idx === arr.length -1){
                setEnd(1)
                return
            }
            setIdx(idx + 1)
        }else {
            setEnd(-1)
        }
    }

    const comp = () => {

        let result = null;

        if(end == 1){
            result = <h1>THE END</h1>
        }else if(end == -1){
            result = <h1>YOU ARE A FOOL</h1>
        }else {
            result = <> <QuizBoard title={arr[idx].title}></QuizBoard> <QuizInput fn={checkAnswer}></QuizInput></> 
        }

        return result;
    }

    return (
        <div>
            {comp()}
        </div>
    )
}

export default QuizComponent