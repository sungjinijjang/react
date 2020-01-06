import React, {useState} from 'react'

const ItemDetails = ({pno,pname,price, amount, changeItem}) => {

    const [amountValue, setAmountValue] = useState(amount)

    const handleChange = (e) => {
        setAmountValue(e.target.value)
        changeItem(pno, e.target.value )
    }

    return (

        <div>
            <h4>{pname}</h4>
            <h4>{price}</h4>
            <h4><input type='number' value={amountValue} 
                        onChange={handleChange} ></input></h4>
            <hr></hr>
        </div>

    )
}
export default ItemDetails