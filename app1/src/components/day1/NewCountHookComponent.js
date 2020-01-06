import React, { useState } from 'react';
import CountBoard from './CountBoard';
import CountButton from './CountButton';

const NewCountHookComponent = () => {

    // count의 초기값
    const [count, setCount] = useState(0)

    const changeCount= (amount) => {
        setCount(count + amount)
    }

    return (
        <div>
            <CountBoard num={count}></CountBoard>
            <CountButton label="1" wrapper = {changeCount} amount={1}></CountButton>
            <CountButton label="-1" wrapper = {changeCount} amount={-1}></CountButton>
        </div>
    )
}

export default NewCountHookComponent