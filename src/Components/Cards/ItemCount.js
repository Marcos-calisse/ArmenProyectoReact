import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const ItemCount = ({ data, setShowButton }) =>{

    const { addProductToCart } = useContext(CartContext)

    const [ cantidad, setCantidad] = useState(1)

    const addCount = () => {
        setCantidad(cantidad + 1)
    }
    const removeCount = () =>{
        setCantidad(cantidad - 1)
    }

    const addToCart = () => {
        setShowButton(true)
        data.cantidad = cantidad
        addProductToCart(data)
    }
    
    return(
        <>
            <div className="containerCount">
                <button className="buttonCard" onClick={removeCount} disabled ={cantidad === 0}>-</button>
                <p>{cantidad}</p>
                <button className="buttonCard" onClick={addCount} disabled={ cantidad === data.stock}>+</button>
            </div>
            <button className="buttonCardDetalle" onClick={addToCart}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount