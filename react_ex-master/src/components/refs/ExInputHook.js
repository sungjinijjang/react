import React, {useRef} from 'react'

const ExInputHook = () => {

    const textInput = useRef()

    const handleClick = () => {
        console.log("ex click", textInput) 

        console.log(textInput.current.value);
    }

    return(
        <div>
            <input type='text' ref ={textInput} ></input>
            <button onClick = {handleClick}>Ex Click</button>
        </div>
    )
}

export default ExInputHook
