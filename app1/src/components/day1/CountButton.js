import React from 'react'

const CountBoard = ({label, wrapper, amount}) => {
    console.log("amount:" + amount)

    return(
        <div>
            <button onClick={() => {wrapper(amount)}}>{label}</button>
        </div>
    )
}

export default CountBoard