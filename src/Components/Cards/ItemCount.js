const ItemCount = ({stock, modificarCantidad, cantidad}) =>{

    const addCount = () => {
        modificarCantidad(cantidad + 1)
    }
    const removeCount = () =>{
        modificarCantidad(cantidad - 1)
    }

    return(
        <div className="containerCount">
            <button className="buttonCard" onClick={removeCount} disabled ={cantidad === 0}>-</button>
            <p>{cantidad}</p>
            <button className="buttonCard" onClick={addCount} disabled={ cantidad === stock}>+</button>
        </div>
    )
}

export default ItemCount