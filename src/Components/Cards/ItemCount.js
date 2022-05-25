import { useState } from 'react'

const ItemCount = ({stock}) =>{

    const [count, setCount] = useState(1)

    const addCount = () => {
        setCount(count + 1)
    }
    const removeCount = () =>{
        setCount(count - 1) 
    }

    return(
        <div className="containerCount">
            <button className="buttonCard" onClick={removeCount} disabled ={count === 0}>-</button>
            <p>{count}</p>
            <button className="buttonCard" onClick={addCount} disabled={ count === stock}>+</button>
        </div>
    )
}

export default ItemCount