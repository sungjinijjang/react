import React from 'react'

const TodoMenu = ({changeType}) => {

    const handleClick = (e) => {
        const target = e.target //실제로 이벤트가 일어난 것 -> target
        //console.log(target.getAttribute("custom-type"))
        changeType(target.getAttribute("custom-type"))
    }

    return(
        <div className='menu' onClick={handleClick}>
            <span custom-type='a'>ALL</span>
            <span custom-type='d'>DONE</span>
            <span custom-type='y'>YET</span>
        </div>
    )
}


export default TodoMenu