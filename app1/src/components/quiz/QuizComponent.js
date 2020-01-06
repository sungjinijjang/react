import React, {useState} from 'react'
import QuizBoard from './QuizBoard'
import QuizInput from './QuizInput'

const QuizComponent = ({arr}) => {

    const [idx, setIdx] = useState(0)
    const [end, setEnd] = useState(0)

    const checkAnswer = (userInput) => {
        console.log("checkAnswer")

        //정답
        if(arr[idx].answer === userInput){

            //마지막 문제까지 다 맞춤
            if(idx === arr.length-1){
                setEnd(1) // end값에 따라 랜더링 값이 달라져야 함???
                return
            }
            //index 번호 증가
            setIdx(idx + 1) // idx++ (x)
        }else{
            setEnd(-1)
        }

    }

const comp = () => {
    let result = null;

    if(end == 1){
        result = <h1>The End</h1>
    }else if(end == -1){
        result = <h1>You Are a Fool</h1>
    }else{
        result = <>
        <QuizBoard title={arr[idx].title}></QuizBoard>
            <QuizInput fn={checkAnswer}></QuizInput>
            </>
    }
    return result;
}

    return(
        <div>
            {comp()}
        </div>
    )
}


export default QuizComponent