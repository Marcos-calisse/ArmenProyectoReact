import './itemDetail.css'
import ItemCount from '../Cards/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {

    const [cantidad, setCantidad] = useState(1)

    const [showButton, setShowButton] = useState(false)

    const addToCart = () => {
        console.log('producto agregado', data)
        console.log('cantidad agregada', cantidad)
        setShowButton(true)
    }

    return(
        <div className="containerDetalleProducto">

            <div className="containerImagenDetalleProducto">
                <img src={`/${data.image}`} alt="" className="imagenProducto" />
            </div>
            <div className="containerInfoDetalle">
                <h2 className="tituloDetalleProducto">{data.nombre}</h2>
                <span className="infoPrecioProducto">{`$ ${data.precio}`}</span>
                <label>Seleccione el talle</label>
                <select>
                    <option></option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
                <label>Seleccione Cantidad</label>
                <ItemCount className="countDelProducto" modificarCantidad={setCantidad} cantidad={cantidad} stock = {5}/>
                <p className="descripcionProducto">{data.descripcion}</p>
                <button className="buttonCardDetalle" onClick={addToCart}>Agregar al carrito</button>
                {showButton && 
                <button className="buttonCardDetalle"><Link to='/cart'>Ir al carrito</Link></button>
                }
                
            </div>
            

        </div>
    )
}

export default ItemDetail