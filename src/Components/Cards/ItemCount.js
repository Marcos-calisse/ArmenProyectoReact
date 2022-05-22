import { useState } from 'react'

const ItemCount = () =>{

    const [count, setCount] = useState(1)

    const addCount = () => {
        setCount(count + 1)
    }
    const removeCount = () =>{
        setCount(count - 1) 
    }

    return(
        <div className="containerCount">
            <button className="buttonCard" onClick={removeCount} disabled={count === 1}>-</button>
            <p>{count}</p>
            <button className="buttonCard" onClick={addCount}>+</button>
        </div>
    )
}

export default ItemCount