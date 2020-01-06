import React from 'react'
import Hello from './Hello'
import Hello2 from './Hello2'

const HelloBox = () => {
    return(
        <div>
            <Hello name={`USER1`}></Hello>
            <Hello name={`USER2`}></Hello>
            <Hello2></Hello2>
            <Hello2></Hello2>
            <Hello2></Hello2>
            <Hello2></Hello2>
            <Hello2></Hello2>
        </div>
    )
}
 

export default HelloBox