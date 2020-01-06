import React, {useState} from 'react'
import QuizBoard from './QuizBoard'
import QuizInput from './QuizInput'

const QuizComponent = () => {

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

    //퀴즈 데이터(퀴즈와 정답-상태유지? 변수선언 유지?)
    // index -> state로 유지
    const arr = [
                    {title:"Quiz1", answer:"1"},
                    {title:"Quiz2", answer:"2"},
                    {title:"Quiz3", answer:"3"},
                    {title:"Quiz4", answer:"4"},
                    {title:"Quiz5", answer:"5"},
                ]

    return(
        <div>
            {/* 동적으로 component를 change */}
            {/* 표현식 */}
            {end ? <h1>true</h1> : 
            <>
            <QuizBoard title={arr[idx].title}></QuizBoard>
            <QuizInput fn={checkAnswer}></QuizInput>
            </>
            }
            
        </div>
    )
}


export default QuizComponent